"use strict";

var _based = _interopRequireDefault(require("based"));

var _decorator = _interopRequireDefault(require("decorator"));

var _some = require("some");

var _graphql = require("@nestjs/graphql");

var _xyz = require("xyz");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Named = (_dec = function (target, key) {
  return (0, _decorator.default)(_some.Some)(target, undefined, 0);
}, _dec2 = function (target, key) {
  return (0, _decorator.default)(target, undefined, 1);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _some.Some === "undefined" ? Object : _some.Some, typeof _some.Some === "undefined" ? Object : _some.Some]), _dec5 = (0, _based.default)(), _dec6 = function (target, key) {
  return (0, _graphql.Args)()(target, key, 0);
}, _dec7 = function (target, key) {
  return (0, _graphql.Context)()(target, key, 1);
}, _dec8 = function (target, key) {
  return (0, _decorator.default)(_xyz.Xyz)(target, key, 2);
}, _dec9 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", [typeof _graphql.Args === "undefined" ? Object : _graphql.Args, typeof _graphql.Context === "undefined" ? Object : _graphql.Context, Object]), (0, _based.default)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = class Named {
  constructor(param, param2) {
    this.param = param;
    this.param2 = param2;
  }

  methodName(args, context, xyz) {}

}, (_applyDecoratedDescriptor(_class2.prototype, "methodName", [_dec5, _dec6, _dec7, _dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "methodName"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
