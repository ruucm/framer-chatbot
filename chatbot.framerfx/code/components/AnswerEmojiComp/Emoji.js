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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 51px !important;\n  height: 51px !important;\n  background-color: transparent !important;\n  cursor: pointer;\n'], ['\n  width: 51px !important;\n  height: 51px !important;\n  background-color: transparent !important;\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _resource = require('framer/resource');

var _framer = require('framer');

var _utils = require('../../shared/utils');

var _handlers = require('../../handlers');

var _reactMeasure = require('react-measure');

var _datas = require('../../datas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var Emoji = function Emoji(_ref) {
  var choiceOrder = _ref.choiceOrder,
      type = _ref.type,
      clicked = _ref.clicked,
      setClicked = _ref.setClicked,
      isBase = _ref.isBase,
      measureRef = _ref.measureRef,
      measure = _ref.measure,
      contentRect = _ref.contentRect,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choiceOrder', 'type', 'clicked', 'setClicked', 'isBase', 'measureRef', 'measure', 'contentRect']);

  var source = (0, _resource.url)('../images/emoji-' + type + '.png');
  var anim = (0, _framer.useAnimation)();

  var throwAnim = function throwAnim() {
    return new Promise(function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
        var target, lastChat, lastChatRect, leftMove, topMove;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // calculate of left, bottom target point
                target = document.querySelectorAll('.chat');

                if (!(target.length > 2)) {
                  _context.next = 8;
                  break;
                }

                lastChat = target[target.length - 1];
                lastChatRect = lastChat.getBoundingClientRect();
                leftMove = window.innerWidth - (contentRect.bounds.left + contentRect.bounds.width) - // use left value, cause right pin is at weird position on Framer Beta
                15.5 - // minus right padding
                2 + //minus increased height?
                -1; // cause emoji not gonna scale like multipe

                topMove = -(contentRect.bounds.top - lastChatRect.bottom - 163); // minus something..

                _context.next = 8;
                return anim.start({
                  left: leftMove,
                  top: topMove,
                  transition: {
                    duration: 0.83 / 2, // make x2 speed
                    ease: 'easeInOut'
                  }
                });

              case 8:

                resolve();
                setClicked({
                  key: choiceOrder,
                  animating: false
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  var handleClicked = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.7,
                  ease: 'easeIn'
                }
              });

            case 2:
              _context2.next = 4;
              return anim.start({
                opacity: 1,
                transition: {
                  duration: 0.34,
                  ease: 'easeInOut'
                }
              });

            case 4:
              _context2.next = 6;
              return throwAnim();

            case 6:
              _context2.next = 8;
              return (0, _utils.sleep)(0.5);

            case 8:
              // sleep for anwserEndAnim

              (0, _handlers.handleAnswerClick)(choiceOrder, (0, _resource.url)('../images/emoji-' + type + '.png'));

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function handleClicked() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fadeAnim = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _utils.sleep)(0.37);

            case 2:
              _context3.next = 4;
              return anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.1,
                  ease: 'easeInOut'
                }
              });

            case 4:
              _context3.next = 6;
              return (0, _utils.sleep)(3);

            case 6:

              anim.start({
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: 'linear'
                }
              });

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function fadeAnim() {
      return _ref4.apply(this, arguments);
    };
  }();

  var answerEndAnim = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(isBase || clicked.key != choiceOrder)) {
                _context4.next = 3;
                break;
              }

              _context4.next = 3;
              return anim.start({
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: 'linear'
                }
              });

            case 3:
              _datas.answer.clicking = false;

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function answerEndAnim() {
      return _ref5.apply(this, arguments);
    };
  }();

  // check states for animations
  if (clicked.key == -1) {
    anim.start({
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.33,
        ease: 'easeInOut',
        delay: 0.03 * choiceOrder
      }
    });
  } else {
    if (clicked.animating) {
      if (clicked.key == choiceOrder) {
        log('clickedAnim! - ', choiceOrder);
        if (!isBase) handleClicked();else fadeAnim();
      } else if (clicked.key != choiceOrder) {
        log('fadeAnim! - ', choiceOrder);
        fadeAnim();
      }
    } else if (!clicked.animating) {
      log('answerEndAnim!!');
      answerEndAnim();
    }
  }

  return _react2.default.createElement(Img, {
    ref: measureRef,
    onTap: function onTap() {
      if (!_datas.answer.clicking) {
        _datas.answer.clicking = true;
        log('clicked', clicked);
        setClicked({
          key: choiceOrder,
          animating: true
        });
      }
    },
    image: source,
    active: clicked.key == -1 || clicked.key == choiceOrder,
    initial: {
      opacity: 0.3,
      top: 163
    },
    animate: anim
  });
};

exports.default = (0, _reactMeasure.withContentRect)('bounds')(Emoji);