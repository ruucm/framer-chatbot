'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = require('../datas');

var _utils = require('../shared/utils');

var _handlers = require('../handlers');

var _consts = require('../shared/consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(subquestion) {
    var question;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_datas.answer.currentQuestionDepth == 0) {
              // 1-1. using currentQuestion
              question = _datas.answer.currentQuestion.subquestions[subquestion - 1];
              // 1-1-1. save subquestions
              _datas.answer.subQuestions = _datas.answer.currentQuestion.subquestions;

              log('answer.subQuestions - (showSubQuestion)', _datas.answer.subQuestions);
            } else if (_datas.answer.currentQuestionDepth == 1) {
              // 1-2. using savevd subQuestions
              question = _datas.answer.subQuestions[subquestion - 1];
            }
            // 1. make question


            log('question - (showSubQuestion)', question);

            // 2-1. add to Chat
            (0, _handlers.addChat)(question);
            log('addChat - showSubQuestion');

            if (!(question.questionType == 'termination')) {
              _context.next = 8;
              break;
            }

            // 2-2. termination (!)
            (0, _handlers.termination)();
            _context.next = 14;
            break;

          case 8:
            // 2-2. set currentQuestion
            _datas.answer.currentQuestion = question;
            // 2-3. show answerType
            _context.next = 11;
            return (0, _utils.sleep)(_consts.delayBeforeNewAnswerType);

          case 11:
            _datas.answer.type = question.answerType;

            // 3. increase currentQuestionDepth
            _datas.answer.currentQuestionDepth++;

            // 4. break out subQuestions
            if (_datas.answer.currentQuestionDepth == 2 || question.answerType == 'None') {
              // await sleep(chatInterval)
              log('break out subQuestions!');
              (0, _handlers.showNextQuestion)(_datas.answer.currentOrder);
            }

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handler(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;