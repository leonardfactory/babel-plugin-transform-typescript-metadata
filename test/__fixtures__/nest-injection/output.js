var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

import { AppService } from './app.service';
export let AppController = (_dec = Controller(), _dec2 = Reflect.metadata("design:paramtypes", [typeof AppService === "undefined" ? Object : AppService]), _dec3 = Inject(), _dec4 = Reflect.metadata("design:type", typeof AppService === "undefined" ? Object : AppService), _dec5 = Inject(), _dec6 = Reflect.metadata("design:type", typeof AppService === "undefined" ? Object : AppService), _dec7 = Get(), _dec8 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = (_class2 = (_temp = class AppController {
  constructor(appService) {
    this.appService = appService;

    _initializerDefineProperty(this, "appService", _descriptor, this);

    _initializerDefineProperty(this, "appService2", _descriptor2, this);
  }

  getHello() {
    return this.appService.getHello();
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "appService", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "appService2", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "getHello", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "getHello"), _class2.prototype)), _class2)) || _class) || _class);
