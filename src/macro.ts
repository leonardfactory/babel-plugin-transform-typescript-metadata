import { createMacro, MacroHandler } from 'babel-plugin-macros';
import { transform } from './transform';

const metadataMacro: MacroHandler = ({ references }) => {
  references.default.forEach(reference => {
    const decorator = reference.findParent(parent => parent.isDecorator())
    if (!decorator) {
      throw new Error("Metadata macro should be used as class decorator");
    }
    const classDeclaration = decorator.findParent(parent => parent.isClassDeclaration());
    if (!classDeclaration) {
      throw new Error("Metadata macro should be used as class decorator");
    }
    if (classDeclaration.isClassDeclaration()) {
      if (classDeclaration.node.decorators) {
        classDeclaration.node.decorators = classDeclaration.node.decorators.filter(it => it !== decorator.node);
      }
      transform(classDeclaration);
    }
  })
};

export default createMacro(metadataMacro);
