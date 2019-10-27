export class GetterSetter {
  private _prop: string;

  @decorate()
  get prop() { return this._prop; }
  @decorate()
  set prop(val: string) { this._prop = val; }

  @decorate()
  get prop2() { return this._prop; }
  set prop2(val: string) { this._prop = val; }
}
