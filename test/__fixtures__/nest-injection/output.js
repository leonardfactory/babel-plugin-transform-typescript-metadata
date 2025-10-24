var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _class, _class2, _descriptor, _descriptor2;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
import { AppService } from './app.service';
export let AppController = (_dec = Controller(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof AppService === "undefined" ? Object : AppService]), _dec4 = Inject(), _dec5 = Reflect.metadata("design:type", typeof AppService === "undefined" ? Object : AppService), _dec6 = Inject(), _dec7 = Reflect.metadata("design:type", typeof AppService === "undefined" ? Object : AppService), _dec8 = Get(), _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class AppController {
  constructor(appService) {
    this.appService = appService;
    _initializerDefineProperty(this, "appService", _descriptor, this);
    _initializerDefineProperty(this, "appService2", _descriptor2, this);
  }
  getHello() {
    return this.appService.getHello();
  }
}, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "appService", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "appService2", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "getHello", [_dec8, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class2.prototype, "getHello"), _class2.prototype), _class2)) || _class) || _class) || _class);
