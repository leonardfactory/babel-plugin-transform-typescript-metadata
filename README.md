# babel-plugin-transform-typescript-metadata

[![Travis (.com)](https://img.shields.io/travis/com/leonardfactory/babel-plugin-transform-typescript-metadata.svg)](https://travis-ci.com/leonardfactory/babel-plugin-transform-typescript-metadata)
[![Codecov](https://img.shields.io/codecov/c/github/leonardfactory/babel-plugin-transform-typescript-metadata.svg)](https://codecov.io/gh/leonardfactory/babel-plugin-transform-typescript-metadata)
[![npm](https://img.shields.io/npm/v/babel-plugin-transform-typescript-metadata.svg?style=popout)](https://www.npmjs.com/package/babel-plugin-transform-typescript-metadata)

Babel plugin to emit decorator metadata like typescript compiler

## Installation

With npm:

```sh
npm install --dev --save babel-plugin-transform-typescript-metadata
```

or with Yarn:

```sh
yarn add --dev babel-plugin-transform-typescript-metadata
```

## Usage

With `.babelrc`:

> **Note:** should be placed **before** `@babel/plugin-proposal-decorators`.

```js
{
  "plugins": [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ],
  "presets": [
    "@babel/preset-typescript"
  ]
}
```
