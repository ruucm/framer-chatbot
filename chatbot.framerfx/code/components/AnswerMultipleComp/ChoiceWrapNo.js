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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require('../../shared/consts');

var _utils = require('../../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrapFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var ChoiceWrap = function ChoiceWrap(_ref) {
  var children = _ref.children,
      choiceOrder = _ref.choiceOrder,
      clicked = _ref.clicked,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'choiceOrder', 'clicked']);

  var anim = (0, _framer.useAnimation)();

  var clickedAnim = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.sleep)(0.37);

            case 2:
              anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.1,
                  ease: 'easeInOut'
                }
              });

            case 3:
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

  var fadeAnim = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function fadeAnim() {
      return _ref3.apply(this, arguments);
    };
  }();

  if (clicked == -1) {
    anim.start({
      top: 0,
      opacity: 1,
      transition: {
        top: {
          duration: _consts.baseDuration,
          ease: _consts.powerEaseInOut
        },
        opacity: {
          duration: _consts.baseDuration,
          ease: 'linear'
        },
        delay: 0.33 + 0.77
      }
    });
  } else if (clicked == choiceOrder) {
    log('clickedAnim! - ', choiceOrder);
    clickedAnim();
  } else if (clicked != choiceOrder) {
    log('fadeAnim! - ', choiceOrder);
    fadeAnim();
  }

  return _react2.default.createElement(
    ChoiceWrapFrame,
    {
      initial: {
        top: 88
        // opacity: 0,
      },
      animate: {
        top: 0
        // opacity: 1,
      }
      // animate={anim}
      // transition={{

      // }}
    },
    children
  );
};

exports.default = ChoiceWrap;