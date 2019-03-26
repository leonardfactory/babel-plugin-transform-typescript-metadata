import { isClassType, serializeType } from '../src/metadata/serializeType';
import { types as t } from '@babel/core';
import template from '@babel/template';

const VoidZero = t.unaryExpression('void', t.numericLiteral(0));

describe('serializeType', () => {
  test('should return void for empty node', () => {
    expect(serializeType(null as any, null)).toEqual(VoidZero);
  });

  test('should return void zero for untyped nodes', () => {
    const node: t.FunctionExpression = template.expression
      .ast`function (param) {}` as any;
    console.log(node);
    expect(serializeType(null as any, node.params[0])).toEqual(VoidZero);
  });

  test('should return void zero for unexepected nodes', () => {
    const node = template.expression.ast`function (param) {}`;
    expect(serializeType(null as any, node as any)).toEqual(VoidZero);
  });

  describe('isClassType', () => {
    test('should recognize simple identifier', () => {
      expect(isClassType('ClassName', t.identifier('ClassName'))).toBe(true);
      expect(isClassType('ClassName', t.identifier('ClassN'))).toBe(false);
    });

    test('should recognize member expressions', () => {
      expect(
        isClassType('ClassName', template.expression.ast`ClassName.My.Type`)
      ).toBe(true);
      expect(
        isClassType('ClassName', (template('ClassN.My')() as any).expression)
      ).toBe(false);
    });

    test('should throw for wrong expressions', () => {
      expect(() => isClassType('ClassName', t.stringLiteral('abc'))).toThrow();
    });
  });
});
