"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SomeService = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SomeService = (_dec = Injectable(), _dec2 = function (target, key) {
  return Inject('aws.s3')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _awsSdk.default.S3 === "undefined" ? Object : _awsSdk.default.S3]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class SomeService {
  constructor(s3client) {
    this.s3client = s3client;
  }

}) || _class) || _class) || _class) || _class);
exports.SomeService = SomeService;
