'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = require('framer');

var type = null;
// 'None', "Emoji Rating", "Likert", "Star Rating", "Slider", "Comment"
var currentOrder = 0;
var currentQuestion = null;
var currentQuestionDepth = 0;
var subQuestions = null;
var subQuestionOrder = 0;
var result = [];
var clicking = false;

exports.default = (0, _framer.Data)({
  type: type,
  currentOrder: currentOrder,
  currentQuestion: currentQuestion,
  currentQuestionDepth: currentQuestionDepth,
  subQuestions: subQuestions,
  subQuestionOrder: subQuestionOrder,
  result: result,
  clicking: clicking
});