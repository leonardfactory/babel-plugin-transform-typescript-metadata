var _dec, _dec2, _dec3, _class, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class2, _class3, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class4, _class5;
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
class Injected {}
let MyClass = (_dec = function (target, key) {
  return inject()(target, undefined, 0);
}, _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected]), _dec(_class = _dec2(_class = _dec3(_class = class MyClass {
  constructor(parameter) {}
}) || _class) || _class) || _class);
let MyOtherClass = (_dec4 = function (target, key) {
  return inject()(target, undefined, 0);
}, _dec5 = function (target, key) {
  return inject('KIND')(target, undefined, 1);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Injected === "undefined" ? Object : Injected]), _dec8 = function (target, key) {
  return demo()(target, key, 0);
}, _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", [String, void 0]), _dec1 = decorate('named'), _dec10 = function (target, key) {
  return inject()(target, key, 0);
}, _dec11 = function (target, key) {
  return arg()(target, key, 1);
}, _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Schema === "undefined" ? Object : Schema]), _dec14 = function (target, key) {
  return argObjectSpread()(target, key, 0);
}, _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", [typeof SchemaObjectSpread === "undefined" ? Object : SchemaObjectSpread]), _dec4(_class2 = _dec5(_class2 = _dec6(_class2 = _dec7(_class2 = (_class3 = class MyOtherClass {
  constructor(parameter, otherParam) {
    this.parameter = parameter;
  }
  methodUndecorated(param, otherParam) {}
  method(param, schema) {}
  methodWithObjectSpread({
    name
  }) {}
}, _applyDecoratedDescriptor(_class3.prototype, "methodUndecorated", [_dec8, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class3.prototype, "methodUndecorated"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "method", [_dec1, _dec10, _dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class3.prototype, "method"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "methodWithObjectSpread", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class3.prototype, "methodWithObjectSpread"), _class3.prototype), _class3)) || _class2) || _class2) || _class2) || _class2);
let DecoratedClass = (_dec17 = function (target, key) {
  return inject()(target, undefined, 0);
}, _dec18 = function (target, key) {
  return inject()(target, undefined, 1);
}, _dec19 = Reflect.metadata("design:type", Function), _dec20 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Injected === "undefined" ? Object : Injected]), _dec21 = decorate('example'), _dec22 = function (target, key) {
  return inject()(target, key, 0);
}, _dec23 = Reflect.metadata("design:type", Function), _dec24 = Reflect.metadata("design:paramtypes", [String]), Decorate(_class4 = _dec17(_class4 = _dec18(_class4 = _dec19(_class4 = _dec20(_class4 = (_class5 = class DecoratedClass {
  constructor(module, otherModule) {
    this.module = module;
  }
  method(param) {}
}, _applyDecoratedDescriptor(_class5.prototype, "method", [_dec21, _dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class5.prototype, "method"), _class5.prototype), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4);
