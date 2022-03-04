var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { AppService } from './app.service';
export let AppController = (_dec = Controller(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof AppService === "undefined" ? Object : AppService]), _dec4 = Inject(), _dec5 = Reflect.metadata("design:type", typeof AppService === "undefined" ? Object : AppService), _dec6 = Inject(), _dec7 = Reflect.metadata("design:type", typeof AppService === "undefined" ? Object : AppService), _dec8 = Get(), _dec9 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class AppController {
  constructor(appService) {
    this.appService = appService;

    _initializerDefineProperty(this, "appService", _descriptor, this);

    _initializerDefineProperty(this, "appService2", _descriptor2, this);
  }

  getHello() {
    return this.appService.getHello();
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "appService", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "appService2", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "getHello", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "getHello"), _class2.prototype)), _class2)) || _class) || _class) || _class);
