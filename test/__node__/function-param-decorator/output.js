"use strict";

var _based = _interopRequireDefault(require("based"));
var _decorator = _interopRequireDefault(require("decorator"));
var _some = require("some");
var _graphql = require("@nestjs/graphql");
var _xyz = require("xyz");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _class, _class2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
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
}, _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", [typeof _graphql.Args === "undefined" ? Object : _graphql.Args, typeof _graphql.Context === "undefined" ? Object : _graphql.Context, Object]), (0, _based.default)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = class Named {
  constructor(param, param2) {
    this.param = param;
    this.param2 = param2;
  }
  methodName(args, context, xyz) {}
}, _applyDecoratedDescriptor(_class2.prototype, "methodName", [_dec5, _dec6, _dec7, _dec8, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class2.prototype, "methodName"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class);
