import { NodePath } from '@babel/traverse';
import { types as t } from '@babel/core';

export function parameterVisitor(
  classPath: NodePath<t.ClassDeclaration>,
  path: NodePath<t.ClassMethod> | NodePath<t.ClassProperty>
) {
  if (path.type !== 'ClassMethod') return;
  if (path.node.type !== 'ClassMethod') return;
  if (path.node.key.type !== 'Identifier') return;

  const methodPath = path as NodePath<t.ClassMethod>;
  const methodName = path.node.key.name;
  const params = methodPath.get('params') || [];

  params.slice().forEach(function(param) {
    let identifier =
      param.node.type === 'Identifier'
        ? param.node
        : param.node.type === 'TSParameterProperty' &&
          param.node.parameter.type === 'Identifier'
        ? param.node.parameter
        : null;

    if (identifier == null) return;

    let resultantDecorator;

    ((param.node as t.Identifier).decorators || [])
      .slice()
      .forEach(function(decorator) {
        const className = classPath.node!.id!.name;

        if (methodPath.node.kind === 'constructor') {
          resultantDecorator = t.callExpression(decorator.expression, [
            t.identifier(className),
            t.identifier('undefined'),
            t.numericLiteral(param.key as number)
          ]);
        } else {
          resultantDecorator = t.callExpression(decorator.expression, [
            t.identifier(`${className}.prototype`),
            t.stringLiteral(methodName),
            t.numericLiteral(param.key as number)
          ]);
        }

        const expression = t.expressionStatement(resultantDecorator);

        classPath.insertAfter(expression);
      });

    if (resultantDecorator) {
      (param.node as t.Identifier).decorators = null;
    }
  });
}
