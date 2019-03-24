import { types as t } from '@babel/core';
import { NodePath } from '@babel/traverse';

type InferArray<T> = T extends Array<infer A> ? A : never;

type Parameter = InferArray<t.ClassMethod['params']> | t.ClassProperty;

function createVoidZero() {
  return t.unaryExpression('void', t.numericLiteral(0));
}

export function serializeType(path: NodePath<any>, param: Parameter) {
  const node =
    param.type === 'Identifier' || param.type === 'ClassProperty'
      ? param
      : param.type === 'TSParameterProperty'
      ? param.parameter.type === 'AssignmentPattern' &&
        param.parameter.left.type === 'Identifier'
        ? param.parameter.left
        : param.parameter.type === 'Identifier'
        ? param.parameter
        : null
      : null;

  if (node == null) return createVoidZero();
  if (!node.typeAnnotation || node.typeAnnotation.type !== 'TSTypeAnnotation')
    return createVoidZero();

  const annotation = node.typeAnnotation.typeAnnotation;
  return serializeTypeNode(annotation);
}

function serializeTypeReferenceNode(node: t.TSTypeReference) {
  /**
   * We need to save references to this type since it is going
   * to be used as a Value (and not just as a Type) here.
   *
   * This is resolved in main plugin method, calling
   * `path.scope.crawl()` which updates the bindings.
   */
  const reference = serializeReference(node.typeName);

  /**
   * We don't know if type is just a type (interface, etc.) or a concrete
   * value (class, etc.).
   * `typeof` operator allows us to use the expression even if it is not
   * defined, fallback is just `Object`.
   */
  return t.conditionalExpression(
    t.binaryExpression(
      '===',
      t.unaryExpression('typeof', reference),
      t.stringLiteral('undefined')
    ),
    t.identifier('Object'),
    t.clone(reference)
  );
}

function serializeReference(
  typeName: t.Identifier | t.TSQualifiedName
): t.Identifier | t.MemberExpression {
  if (typeName.type === 'Identifier') return t.identifier(typeName.name);
  return t.memberExpression(serializeReference(typeName.left), typeName.right);
}

type SerializedType =
  | t.Identifier
  | t.UnaryExpression
  | t.ConditionalExpression;

/**
 * Actual serialization given the TS Type annotation.
 * Result tries to get the best match given the information available.
 *
 * Implementation is adapted from original TSC compiler source as
 * available here:
 *  https://github.com/Microsoft/TypeScript/blob/2932421370df720f0ccfea63aaf628e32e881429/src/compiler/transformers/ts.ts
 */
function serializeTypeNode(node: t.TSType): SerializedType {
  if (node === undefined) {
    return t.identifier('Object');
  }

  switch (node.type) {
    case 'TSVoidKeyword':
    case 'TSUndefinedKeyword':
    case 'TSNullKeyword':
    case 'TSNeverKeyword':
      return createVoidZero();

    case 'TSParenthesizedType':
      return serializeTypeNode(node.typeAnnotation);

    case 'TSFunctionType':
    case 'TSConstructorType':
      return t.identifier('Function');

    case 'TSArrayType':
    case 'TSTupleType':
      return t.identifier('Array');

    case 'TSTypePredicate':
    case 'TSBooleanKeyword':
      return t.identifier('Boolean');

    case 'TSStringKeyword':
      return t.identifier('String');

    case 'TSObjectKeyword':
      return t.identifier('Object');

    case 'TSLiteralType':
      switch (node.literal.type) {
        case 'StringLiteral':
          return t.identifier('String');

        case 'NumericLiteral':
          return t.identifier('Number');

        case 'BooleanLiteral':
          return t.identifier('Boolean');

        default:
          /**
           * @todo Use `path` error building method.
           */
          throw new Error('Bad type for decorator' + node.literal);
      }

    case 'TSNumberKeyword':
      return t.identifier('Number');

    case 'TSSymbolKeyword':
      return t.identifier('Symbol');

    case 'TSTypeReference':
      return serializeTypeReferenceNode(node);

    case 'TSIntersectionType':
    case 'TSUnionType':
      return serializeTypeList(node.types);

    case 'TSConditionalType':
      return serializeTypeList([node.trueType, node.falseType]);

    case 'TSTypeQuery':
    case 'TSTypeOperator':
    case 'TSIndexedAccessType':
    case 'TSMappedType':
    case 'TSTypeLiteral':
    case 'TSAnyKeyword':
    case 'TSUnknownKeyword':
    case 'TSThisType':
      //case SyntaxKind.ImportType:
      break;

    default:
      throw new Error('Bad type for decorator');
  }

  return t.identifier('Object');
}

/**
 * Type lists need some refining. Even here, implementation is slightly
 * adapted from original TSC compiler:
 *
 *  https://github.com/Microsoft/TypeScript/blob/2932421370df720f0ccfea63aaf628e32e881429/src/compiler/transformers/ts.ts
 */
function serializeTypeList(types: ReadonlyArray<t.TSType>): SerializedType {
  let serializedUnion: SerializedType | undefined;

  for (let typeNode of types) {
    while (typeNode.type === 'TSParenthesizedType') {
      typeNode = typeNode.typeAnnotation; // Skip parens if need be
    }
    if (typeNode.type === 'TSNeverKeyword') {
      continue; // Always elide `never` from the union/intersection if possible
    }
    if (
      typeNode.type === 'TSNullKeyword' ||
      typeNode.type === 'TSUndefinedKeyword'
    ) {
      continue; // Elide null and undefined from unions for metadata, just like what we did prior to the implementation of strict null checks
    }
    const serializedIndividual = serializeTypeNode(typeNode);

    if (
      t.isIdentifier(serializedIndividual) &&
      serializedIndividual.name === 'Object'
    ) {
      // One of the individual is global object, return immediately
      return serializedIndividual;
    }
    // If there exists union that is not void 0 expression, check if the the common type is identifier.
    // anything more complex and we will just default to Object
    else if (serializedUnion) {
      // Different types
      if (
        !t.isIdentifier(serializedUnion) ||
        !t.isIdentifier(serializedIndividual) ||
        serializedUnion.name !== serializedIndividual.name
      ) {
        return t.identifier('Object');
      }
    } else {
      // Initialize the union type
      serializedUnion = serializedIndividual;
    }
  }

  // If we were able to find common type, use it
  return serializedUnion || createVoidZero(); // Fallback is only hit if all union constituients are null/undefined/never
}
