'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  z-index: -1;\n  background: transparent !important;\n'], ['\n  z-index: -1;\n  background: transparent !important;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 35px;\n  border-radius: 35px;\n\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  white-space: nowrap;\n'], ['\n  line-height: 35px;\n  border-radius: 35px;\n\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  white-space: nowrap;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../shared/utils');

var _consts = require('../../shared/consts');

var _handlers = require('../../handlers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var Text = _styledComponents2.default.div(_templateObject2);

var Choice = function Choice(_ref) {
  var type = _ref.type,
      choice = _ref.choice,
      choiceOrder = _ref.choiceOrder,
      clicked = _ref.clicked,
      props = (0, _objectWithoutProperties3.default)(_ref, ['type', 'choice', 'choiceOrder', 'clicked']);

  var anim = (0, _framer.useAnimation)();

  var clickedAnim = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.34,
                  ease: 'linear'
                }
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function clickedAnim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var answerEndAnim = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              log('answerEndAnim', choiceOrder);
              _context2.next = 3;
              return anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.34,
                  ease: 'linear'
                }
              });

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function answerEndAnim() {
      return _ref3.apply(this, arguments);
    };
  }();

  if (clicked.key == -1) {
    anim.start({
      opacity: 1,
      transition: {
        opacity: {
          duration: _consts.baseDuration,
          ease: 'linear'
        },
        delay: 0.33 + 0.77
      }
    });
  } else if (clicked.key == choiceOrder)
    // fade only clicked
    clickedAnim();else if (!clicked.animating)
    // make end of answer anim
    answerEndAnim();

  return choice ? _react2.default.createElement(
    ChoiceFrame,
    {
      width: 'initial',
      height: 'initial',
      position: 'relative',
      initial: {
        opacity: 0
      },
      animate: anim
    },
    _react2.default.createElement(
      Text,
      { type: type },
      choice.koDescription
    )
  ) : '';
};

exports.default = Choice;