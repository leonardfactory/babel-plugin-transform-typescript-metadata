"use strict";

var _based = _interopRequireDefault(require("based"));

var _decorator = _interopRequireDefault(require("decorator"));

var _some = require("some");

var _graphql = require("@nestjs/graphql");

var _xyz = require("xyz");

var _dec, _dec2, _dec3, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Named = (_dec = Reflect.metadata("design:paramtypes", [typeof _some.Some === "undefined" ? Object : _some.Some, typeof _some.Some === "undefined" ? Object : _some.Some]), _dec2 = (0, _based.default)(), _dec3 = Reflect.metadata("design:paramtypes", [typeof _graphql.Args === "undefined" ? Object : _graphql.Args, typeof _graphql.Context === "undefined" ? Object : _graphql.Context, null]), (0, _based.default)(_class = _dec(_class = (_class2 = class Named {
  constructor(param, param2) {
    this.param = param;
    this.param2 = param2;
  }

  methodName(args, context, xyz) {}

}, (_applyDecoratedDescriptor(_class2.prototype, "methodName", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "methodName"), _class2.prototype)), _class2)) || _class) || _class);
(0, _decorator.default)(_xyz.Xyz)(Named.prototype, "methodName", 2);
(0, _graphql.Context)()(Named.prototype, "methodName", 1);
(0, _graphql.Args)()(Named.prototype, "methodName", 0);
(0, _decorator.default)(Named, undefined, 1);
(0, _decorator.default)(_some.Some)(Named, undefined, 0);
