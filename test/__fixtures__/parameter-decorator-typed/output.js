var _dec, _dec2, _dec3, _class, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class2, _class3, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class4, _class5;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

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
}, _dec9 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", [String, void 0]), _dec11 = decorate('named'), _dec12 = function (target, key) {
  return inject()(target, key, 0);
}, _dec13 = function (target, key) {
  return arg()(target, key, 1);
}, _dec14 = Reflect.metadata("design:type", Function), _dec15 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Schema === "undefined" ? Object : Schema]), _dec16 = decorateObjectSpread(), _dec17 = Reflect.metadata("design:type", Function), _dec18 = Reflect.metadata("design:paramtypes", [typeof Schema === "undefined" ? Object : Schema]), _dec4(_class2 = _dec5(_class2 = _dec6(_class2 = _dec7(_class2 = (_class3 = class MyOtherClass {
  constructor(parameter, otherParam) {
    this.parameter = parameter;
  }

  methodUndecorated(param, otherParam) {}

  method(param, schema) {}

  methodWithObjectSpread(@argObjectSpread()
  {
    name
  }) {}

}, (_applyDecoratedDescriptor(_class3.prototype, "methodUndecorated", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class3.prototype, "methodUndecorated"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "method", [_dec11, _dec12, _dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class3.prototype, "method"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "methodWithObjectSpread", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class3.prototype, "methodWithObjectSpread"), _class3.prototype)), _class3)) || _class2) || _class2) || _class2) || _class2);
let DecoratedClass = (_dec19 = function (target, key) {
  return inject()(target, undefined, 0);
}, _dec20 = function (target, key) {
  return inject()(target, undefined, 1);
}, _dec21 = Reflect.metadata("design:type", Function), _dec22 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Injected === "undefined" ? Object : Injected]), _dec23 = decorate('example'), _dec24 = function (target, key) {
  return inject()(target, key, 0);
}, _dec25 = Reflect.metadata("design:type", Function), _dec26 = Reflect.metadata("design:paramtypes", [String]), Decorate(_class4 = _dec19(_class4 = _dec20(_class4 = _dec21(_class4 = _dec22(_class4 = (_class5 = class DecoratedClass {
  constructor(module, otherModule) {
    this.module = module;
  }

  method(param) {}

}, (_applyDecoratedDescriptor(_class5.prototype, "method", [_dec23, _dec24, _dec25, _dec26], Object.getOwnPropertyDescriptor(_class5.prototype, "method"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4);
