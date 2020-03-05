var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Decorate } from './Decorate';
const sym = Symbol();
let Sample = (_dec = Decorate(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof String === "undefined" ? Object : String, typeof Number === "undefined" ? Object : Number, Number, String, Boolean, String, Number, typeof Object === "undefined" ? Object : Object, Function, String, Object, typeof Function === "undefined" ? Object : Function, void 0, void 0, Object, Function, Boolean, Boolean, String]), _dec4 = function (target, key) {
  return Arg()(target, key, 0);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof Symbol === "undefined" ? Object : Symbol, Object, String, void 0, String, String, typeof Maybe === "undefined" ? Object : Maybe, Object, Object, Array, Array, void 0, Boolean, void 0, String, typeof Object === "undefined" ? Object : Object, Object, Number]), _dec7 = Decorate(), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [typeof Decorate.Name === "undefined" ? Object : Decorate.Name, typeof Decorate.Name === "undefined" ? Object : Decorate.Name]), _dec10 = Decorate(), _dec11 = Reflect.metadata("design:type", Function), _dec12 = Reflect.metadata("design:paramtypes", [String]), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Sample {
  constructor(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18 = 'abc') {
    this.p0 = p0;
  }

  method(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17) {}
  /**
   * Member Expression
   */


  method2(p0 = 'abc', p1) {}
  /**
   * Assignments
   */


  assignments(p0 = 'abc') {}

}, (_applyDecoratedDescriptor(_class2.prototype, "method", [Decorate, _dec4, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "method"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "method2", [_dec7, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "method2"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "assignments", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "assignments"), _class2.prototype)), _class2)) || _class) || _class) || _class);
