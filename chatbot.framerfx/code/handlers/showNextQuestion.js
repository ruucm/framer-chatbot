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

var _consts = require('../shared/consts');

var _handlers = require('../handlers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(before) {
    var next, i, question;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next = before + 1;

            _datas.answer.currentOrder = next;
            _datas.answer.currentQuestionDepth = 0;

            // 1. go loop until found proper answerType (answerType != 'None')
            i = next;

          case 4:
            if (!(i < _datas.chats.questions.length)) {
              _context.next = 26;
              break;
            }

            question = _datas.chats.questions[i];

            // 1-1. add to Chat & move currentOrder (except first chat)

            _context.t0 = i > 0;

            if (!_context.t0) {
              _context.next = 10;
              break;
            }

            _context.next = 10;
            return (0, _utils.sleep)(_consts.chatInterval);

          case 10:
            (0, _handlers.addChat)(question);
            log('addChat - showNextQuestion');
            _datas.answer.currentOrder = i;

            // 2. find(show) answerType & break Loop

            if (!(question.questionType == 'termination')) {
              _context.next = 17;
              break;
            }

            // 2-1. termination (!)
            (0, _handlers.termination)();
            _context.next = 23;
            break;

          case 17:
            if (!(question.answerType != 'None')) {
              _context.next = 23;
              break;
            }

            // 2-2. show new answerType & break loop
            // set currentQuestion
            _datas.answer.currentQuestion = question;
            // show answerType
            _context.next = 21;
            return (0, _utils.sleep)(_consts.delayBeforeNewAnswerType);

          case 21:
            _datas.answer.type = question.answerType;
            // break Loop!
            return _context.abrupt('break', 26);

          case 23:
            i++;
            _context.next = 4;
            break;

          case 26:
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