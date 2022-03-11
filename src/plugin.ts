import { PluginObj } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import { parameterVisitor } from './parameter/parameterVisitor';
import { metadataVisitor } from './metadata/metadataVisitor';
import { transform } from './transform';

export default declare(
  (api: any): PluginObj => {
    api.assertVersion(7);

    return {
      visitor: {
        Program(programPath) {
          /**
           * We need to traverse the program right here since
           * `@babel/preset-typescript` removes imports at this level.
           *
           * Since we need to convert some typings into **bindings**, used in
           * `Reflect.metadata` calls, we need to process them **before**
           * the typescript preset.
           */
          programPath.traverse({
            ClassDeclaration(path) {
              transform(path);
            }
          });
        }
      }
    };
  }
);
