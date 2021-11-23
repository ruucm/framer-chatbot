'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _datas = require('../datas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(question) {
  if (_datas.chats.list == null) _datas.chats.list = [question];else _datas.chats.list = [].concat((0, _toConsumableArray3.default)(_datas.chats.list), [question]);
};

exports.default = handler;