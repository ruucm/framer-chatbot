'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = require('../datas');

var _handlers = require('../handlers');

var _consts = require('../shared/consts');

var _utils = require('../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(choiceOrder, answerImage) {
    var choices, newChat, subquestion;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log('handleAnswerClick');
            choices = _datas.answer.currentQuestion.choices;

            // 1. save answer

            (0, _handlers.setAnswers)(_datas.answer.currentQuestion.id, typeof choiceOrder == 'string' ? choiceOrder : null, choices.length ? choices[choiceOrder].id : null, choices.length ? choices[choiceOrder].score : null);

            // 2. add answer to chat.list

            if (answerImage || choices.length && choices[choiceOrder].koDescription)
              // use contents of currentQuestion
              newChat = {
                image: answerImage,
                koDescription: answerImage ? '' : choices[choiceOrder].koDescription, // if this chat has answerImage, don't add koDescription
                answerType: _datas.answer.currentQuestion.answerType
                // if there is no contents in currentQuestion
              };else newChat = {
              image: null,
              koDescription: choiceOrder,
              answerType: _datas.answer.currentQuestion.answerType
            };
            (0, _handlers.addChat)(newChat);
            log('addChat! - handleAnswerClick');

            // 3. Hide Current Answer Type
            _datas.answer.type = 'Temp';

            // 4. check it has subquestion of choices
            subquestion = choices.length ? choices[choiceOrder].subquestion : null;


            if (subquestion > 0) {
              // 4-1. show subquestions
              (0, _handlers.showSubQuestion)(subquestion);
            } else {
              // 4-2. show next
              (0, _handlers.showNextQuestion)(_datas.answer.currentOrder);
            }

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;