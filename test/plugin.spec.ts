import path from 'path';
import { define } from './__helpers__/utils';

define('emit metadata', {
  presets: [['@babel/preset-typescript', { ignoreExtensions: true }]],
  plugins: [
    require('../src/plugin'),
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    '@babel/plugin-transform-object-rest-spread'
  ]
}, path.join(__dirname, '__fixtures__'));
