import { NodePath } from '@babel/traverse';
import { ClassDeclaration } from '@babel/types';
import { metadataVisitor } from './metadata/metadataVisitor';
import { parameterVisitor } from './parameter/parameterVisitor';

export function transform(path: NodePath<ClassDeclaration>) {
  for (const field of path.get('body').get('body')) {
    if (
      field.type !== 'ClassMethod' &&
      field.type !== 'ClassProperty'
    )
      continue;

    parameterVisitor(path, field as any);
    metadataVisitor(path, field as any);
  }

  /**
   * We need to keep binding in order to let babel know where imports
   * are used as a Value (and not just as a type), so that
   * `babel-transform-typescript` do not strip the import.
   */
  (path.parentPath.scope as any).crawl();
}
