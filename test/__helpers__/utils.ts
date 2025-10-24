import { create } from 'babel-test';

import { toMatchFile } from 'jest-file-snapshot';
expect.extend({ toMatchFile });

// We need to use the Node.js implementation of `require` to load Babel 8
// packages, instead of Jest's sandboxed implementation, because Babel 8 is
// written in ESM and Jest doesn't support it properly yet.
import Module from 'module';
import {pathToFileURL} from 'url';
const createOriginalNodeRequire = Object.getPrototypeOf(Module).createRequire;
const requireForBabel8 = createOriginalNodeRequire(
  pathToFileURL(require.resolve('./babel-8/package.json')),
);


export function define(
  description: string,
  config: any,
  pathForBabel7: string,
  pathForBabel8: string = pathForBabel7
) {
  const babel7 = create((code, options) =>
    require('@babel/core').transformAsync(
      code,
      {
        caller: { name: 'babel-test' },
        babelrc: false,
        configFile: false,
        ...config,
        ...options
      },
    ));

  function replaceWithBabel8Version(plugin: any) {
    if (Array.isArray(plugin) && typeof plugin[0] === 'string') {
      return [
        requireForBabel8(plugin[0]),
        ...plugin.slice(1),
      ];
    } else if (typeof plugin === 'string') {
      return requireForBabel8(plugin);
    }
    return plugin;
  }

  const babel8 = create((code, options): any =>
    requireForBabel8('@babel/core').transformAsync(
      code,
      {
        caller: { name: 'babel-test' },
        babelrc: false,
        configFile: false,
        ...config,
        plugins: config.plugins?.map(replaceWithBabel8Version),
        presets: config.presets?.map(replaceWithBabel8Version),
        ...options
      },
    ));

  describe('babel 7', () => {
    babel7.fixtures(description, pathForBabel7);
  });

  const isNodeGte22 = parseInt(process.versions.node) >= 22;

  (isNodeGte22 ? describe : describe.skip)('babel 8', () => {
    babel8.fixtures(description, pathForBabel8);
  });
};
