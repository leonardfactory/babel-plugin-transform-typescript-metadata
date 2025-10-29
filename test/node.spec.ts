import path from 'path';
import { define } from './__helpers__/utils';

define('emit metadata with node env', {
  presets: [
    ['@babel/preset-env', { useBuiltIns: false, targets: { node: true } }],
    ['@babel/preset-typescript', { ignoreExtensions: true }]
  ],
  plugins: [
    require('../src/plugin'),
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    ['@babel/plugin-transform-class-properties', { loose: true }]
  ]
}, path.join(__dirname, '__node__'));
