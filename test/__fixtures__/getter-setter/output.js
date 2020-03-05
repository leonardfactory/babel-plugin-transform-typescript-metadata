var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _temp;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

export let GetterSetter = (_dec = decorate(), _dec2 = Reflect.metadata("design:type", "Object"), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", []), _dec5 = decorate(), _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [String]), _dec8 = decorate(), _dec9 = Reflect.metadata("design:type", "Object"), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", []), (_class = (_temp = class GetterSetter {
  constructor() {
    this._prop = void 0;
  }

  get prop() {
    return this._prop;
  }

  set prop(val) {
    this._prop = val;
  }

  get prop2() {
    return this._prop;
  }

  set prop2(val) {
    this._prop = val;
  }

}, _temp), (_applyDecoratedDescriptor(_class.prototype, "prop", [_dec, _dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, "prop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "prop", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class.prototype, "prop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "prop2", [_dec8, _dec9, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, "prop2"), _class.prototype)), _class));
