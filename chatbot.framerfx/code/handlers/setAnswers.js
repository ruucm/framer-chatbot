'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _datas = require('../datas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(questionId, content, choiceId, choiceScore) {
  var newData = {
    questionId: questionId, // (number)
    content: content, // 주관식 질문에만 해당 (string)
    choiceId: choiceId, // 객관식 질문에 해당, survey에 적혀있는 choice의 ID 사용 (number)
    choiceScore: choiceScore // score
  };
  _datas.answer.result = [].concat((0, _toConsumableArray3.default)(_datas.answer.result), [newData]);

  log('answer.result - (setAnswers)', _datas.answer.result);
};

exports.default = handler;