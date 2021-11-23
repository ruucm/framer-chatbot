'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = require('framer');

var _demoQuestions = require('./demoQuestions');

var _demoQuestions2 = _interopRequireDefault(_demoQuestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questions = _demoQuestions2.default;
var list = null;

exports.default = (0, _framer.Data)({
  questions: questions,
  list: list
});