var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
let MyClass = (_dec = Reflect.metadata("design:type", Function), _dec2 = Reflect.metadata("design:paramtypes", [typeof Generic === "undefined" ? Object : Generic, typeof Generic === "undefined" ? Object : Generic]), _dec3 = function (target, key) {
  return Arg()(target, key, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof Inter === "undefined" ? Object : Inter, typeof InterGen === "undefined" ? Object : InterGen]), Decorate(_class = _dec(_class = _dec2(_class = (_class2 = class MyClass {
  constructor(generic, generic2) {
    this.generic = generic;
  }
  method(generic, generic2) {}
}, _applyDecoratedDescriptor(_class2.prototype, "method", [Run, _dec3, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "method"), _class2.prototype), _class2)) || _class) || _class) || _class);
