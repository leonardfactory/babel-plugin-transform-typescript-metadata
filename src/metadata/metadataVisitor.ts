import { NodePath } from '@babel/traverse';
import { types as t } from '@babel/core';
import { serializeType } from './serializeType';

export function metadataVisitor(
  classPath: NodePath<t.ClassDeclaration>,
  path: NodePath<t.ClassProperty | t.ClassMethod>
) {
  const field = path.node;
  const classNode = classPath.node;

  switch (field.type) {
    case 'ClassMethod':
      const decorators =
        field.kind === 'constructor' ? classNode.decorators : field.decorators;

      if (!decorators || decorators.length === 0) return;

      decorators!.push(
        t.decorator(
          t.callExpression(
            t.memberExpression(
              t.identifier('Reflect'),
              t.identifier('metadata')
            ),
            [
              t.stringLiteral('design:paramtypes'),
              t.arrayExpression(
                field.params.map(param => serializeType(classPath, param))
              )
            ]
          )
        )
      );
      break;

    case 'ClassProperty':
      if (!field.decorators || field.decorators.length === 0) return;

      if (
        !field.typeAnnotation ||
        field.typeAnnotation.type !== 'TSTypeAnnotation'
      )
        return;

      field.decorators!.push(
        t.decorator(
          t.callExpression(
            t.memberExpression(
              t.identifier('Reflect'),
              t.identifier('metadata')
            ),
            [t.stringLiteral('design:type'), serializeType(classPath, field)]
          )
        )
      );
      break;
  }
}
