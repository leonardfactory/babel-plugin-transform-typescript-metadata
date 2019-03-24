import path from 'path';
import { create } from 'babel-test';

import { toMatchFile } from 'jest-file-snapshot';
expect.extend({ toMatchFile });

const { fixtures, test } = create({
  presets: [['@babel/preset-typescript', { allExtensions: true }]],
  plugins: [
    require.resolve('../src/plugin'),
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread'
  ]
});

fixtures(
  'babel-plugin-typescript-parameter-decorator',
  path.join(__dirname, '__fixtures__')
);

const { fixtures: fixturesNode } = create({
  presets: [
    ['@babel/preset-env', { useBuiltIns: false, targets: { node: true } }],
    ['@babel/preset-typescript', { allExtensions: true }]
  ],
  plugins: [
    require.resolve('../babel-plugin-typescript-metadata'),
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread'
  ]
});

fixturesNode(
  'babel-plugin-typescript-parameter-decorator on node',
  path.join(__dirname, '__fixtures_node__')
);
