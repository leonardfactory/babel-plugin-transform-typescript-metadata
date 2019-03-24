import { types as t } from '@babel/core';
import { NodePath } from '@babel/traverse';

type InferArray<T> = T extends Array<infer A> ? A : never;

type Parameter = InferArray<t.ClassMethod['params']> | t.ClassProperty;

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

  if (node == null) return t.nullLiteral();
  if (!node.typeAnnotation || node.typeAnnotation.type !== 'TSTypeAnnotation')
    return t.nullLiteral();

  const annotation = node.typeAnnotation.typeAnnotation;
  switch (annotation.type) {
    case 'TSTypeReference':
      /**
       * We need to save references to this type since it is going
       * to be used as a Value (and not just as a Type) here.
       *
       * This is resolved in main plugin method, calling
       * `path.scope.crawl()` which updates the bindings.
       */
      const reference = serializeReference(annotation.typeName);

      /**
       * We don't know if type is just a type (interface, etc.) or a concrete
       * value (class, etc.).
       * `typeof` operator allows us to use the expression even if it is not
       * defined, fallback is just `Object`.
       *
       * @todo Support more base types like number, lists, etc.
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

    default:
      return t.nullLiteral();
  }
}

function serializeReference(
  typeName: t.Identifier | t.TSQualifiedName
): t.Identifier | t.MemberExpression {
  if (typeName.type === 'Identifier') return t.identifier(typeName.name);
  return t.memberExpression(serializeReference(typeName.left), typeName.right);
}
