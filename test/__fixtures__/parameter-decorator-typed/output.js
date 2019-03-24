var _dec, _dec2, _class, _dec3, _dec4, _dec5, _class2, _class3;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

class Injected {}

class MyClass {
  constructor(parameter) {}

}

inject()(MyClass, undefined, 0);
let MyOtherClass = (_dec = decorate('named'), _dec2 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Schema === "undefined" ? Object : Schema]), (_class = class MyOtherClass {
  constructor(parameter, otherParam) {
    this.parameter = parameter;
  }

  methodUndecorated(param, otherParam) {}

  method(param, schema) {}

}, (_applyDecoratedDescriptor(_class.prototype, "method", [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype)), _class));
arg()(MyOtherClass.prototype, "method", 1);
inject()(MyOtherClass.prototype, "method", 0);
demo()(MyOtherClass.prototype, "methodUndecorated", 0);
inject('KIND')(MyOtherClass, undefined, 1);
inject()(MyOtherClass, undefined, 0);
let DecoratedClass = (_dec3 = Reflect.metadata("design:paramtypes", [typeof Injected === "undefined" ? Object : Injected, typeof Injected === "undefined" ? Object : Injected]), _dec4 = decorate('example'), _dec5 = Reflect.metadata("design:paramtypes", [String]), Decorate(_class2 = _dec3(_class2 = (_class3 = class DecoratedClass {
  constructor(module, otherModule) {
    this.module = module;
  }

  method(param) {}

}, (_applyDecoratedDescriptor(_class3.prototype, "method", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class3.prototype, "method"), _class3.prototype)), _class3)) || _class2) || _class2);
inject()(DecoratedClass.prototype, "method", 0);
inject()(DecoratedClass, undefined, 1);
inject()(DecoratedClass, undefined, 0);
