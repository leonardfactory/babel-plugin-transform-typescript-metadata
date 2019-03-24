var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { Decorate } from './Decorate';
const sym = Symbol();
let Sample = (_dec = Decorate(), _dec2 = Reflect.metadata("design:paramtypes", [typeof String === "undefined" ? Object : String, typeof Number === "undefined" ? Object : Number, Number, String, Boolean, String, Number, typeof Object === "undefined" ? Object : Object, Function, String, Object, typeof Function === "undefined" ? Object : Function, void 0, void 0, Object, Function, Boolean, Boolean]), _dec3 = Reflect.metadata("design:paramtypes", [typeof Symbol === "undefined" ? Object : Symbol, Object, String, void 0, String, String, typeof Maybe === "undefined" ? Object : Maybe, Object, Object, Array, Array, void 0, Boolean, void 0, String, typeof Object === "undefined" ? Object : Object, Object, void 0]), _dec4 = Decorate(), _dec5 = Reflect.metadata("design:paramtypes", [void 0, typeof Decorate.Name === "undefined" ? Object : Decorate.Name]), _dec(_class = _dec2(_class = (_class2 = class Sample {
  constructor(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17) {
    this.p0 = p0;
  }

  method(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17 = '') {}

  method2(p0 = 'abc', p1) {}

}, (_applyDecoratedDescriptor(_class2.prototype, "method", [Decorate, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "method"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "method2", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "method2"), _class2.prototype)), _class2)) || _class) || _class);
Arg()(Sample.prototype, "method", 0);
