import path from 'path';
import { create } from 'babel-test';

import { toMatchFile } from 'jest-file-snapshot';
expect.extend({ toMatchFile });

const { fixtures } = create({
  presets: [['@babel/preset-typescript', { allExtensions: true }]],
  plugins: [
    require.resolve('../src/plugin'),
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread'
  ]
});

fixtures('emit metadata', path.join(__dirname, '__fixtures__'));
