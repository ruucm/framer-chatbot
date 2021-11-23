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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100% !important;\n  height: 35px !important;\n  background: transparent !important;\n  overflow: hidden;\n  border-radius: 35px;\n  /* -webkit-mask-image: -webkit-radial-gradient(white, black); */\n  transition: ', 's height ease,\n    ', 's border-radius ease !important;\n  ', '\n'], ['\n  width: 100% !important;\n  height: 35px !important;\n  background: transparent !important;\n  overflow: hidden;\n  border-radius: 35px;\n  /* -webkit-mask-image: -webkit-radial-gradient(white, black); */\n  transition: ', 's height ease,\n    ', 's border-radius ease !important;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      height: 37px !important;\n      border-radius: 0;\n    '], ['\n      height: 37px !important;\n      border-radius: 0;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  background: #fd5863 !important;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 1;\n  overflow: hidden;\n  border-radius: 35px;\n\n  transition: ', 's border-radius ease !important;\n  ', '\n'], ['\n  display: inline-block;\n  background: #fd5863 !important;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 1;\n  overflow: hidden;\n  border-radius: 35px;\n\n  transition: ', 's border-radius ease !important;\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      border-radius: 15.25px 15.25px 5px 15.25px;\n    '], ['\n      border-radius: 15.25px 15.25px 5px 15.25px;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background: linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%);\n  width: 100% !important;\n  height: 100% !important;\n  transition: ', 's opacity ease !important;\n  ', '\n'], ['\n  background: linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%);\n  width: 100% !important;\n  height: 100% !important;\n  transition: ', 's opacity ease !important;\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      opacity: 0;\n    '], ['\n      opacity: 0;\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n\n  z-index: 1;\n  cursor: pointer;\n\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n'], ['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n\n  z-index: 1;\n  cursor: pointer;\n\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../shared/utils');

var _handlers = require('../../handlers');

var _datas = require('../../datas');

var _animate = require('../../animate');

var _consts = require('../../shared/consts');

var _reactMeasure = require('react-measure');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapTransformTime = 0.05;

var WrapFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject, wrapTransformTime, wrapTransformTime, function (props) {
  return props.clicked.key >= 0 && (0, _styledComponents.css)(_templateObject2);
});
var CoverFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject3, wrapTransformTime, function (props) {
  return props.clicked.key >= 0 && (0, _styledComponents.css)(_templateObject4);
});

var BGGrdient = (0, _styledComponents2.default)(_framer.Frame)(_templateObject5, wrapTransformTime, function (props) {
  return props.clicked.key >= 0 && (0, _styledComponents.css)(_templateObject6);
});

var TextFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject7);

var ChoiceCover = function ChoiceCover(_ref) {
  var choice = _ref.choice,
      choiceOrder = _ref.choiceOrder,
      type = _ref.type,
      clicked = _ref.clicked,
      setClicked = _ref.setClicked,
      measureRef = _ref.measureRef,
      measure = _ref.measure,
      contentRect = _ref.contentRect,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choice', 'choiceOrder', 'type', 'clicked', 'setClicked', 'measureRef', 'measure', 'contentRect']);

  var wrapAnim = (0, _framer.useAnimation)();
  var coverAnim = (0, _framer.useAnimation)();
  var coverTextAnim = (0, _framer.useAnimation)();
  // const [clicked, setClicked] = useState(false)

  var throwAnim = function throwAnim() {
    return new Promise(function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
        var target, lastChat, lastChatRect, leftMove, bottomMove;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // make same style of wrap as target bubble using css
                setClicked({
                  key: choiceOrder,
                  animating: true
                });

                // calculate of left, bottom target point
                target = document.querySelectorAll('.chat');

                if (!(target.length >= 1)) {
                  _context.next = 16;
                  break;
                }

                lastChat = target[target.length - 1];
                lastChatRect = lastChat.getBoundingClientRect();
                leftMove = window.innerWidth - (contentRect.bounds.left + contentRect.bounds.width) - // use left value, cause right pin is at weird position on Framer Beta
                15.5 - // minus right padding
                2; //minus increased height?

                bottomMove = contentRect.bounds.bottom - lastChatRect.bottom - 2; //minus increased height

                if (type == 'multiple') bottomMove -= 88; // minus initial of top anim

                wrapAnim.start({
                  left: leftMove,
                  bottom: bottomMove,
                  transition: {
                    duration: _consts.muitipleBaseDuration,
                    ease: 'easeInOut'
                  }
                });

                _context.next = 11;
                return wrapAnim.start({
                  scale: 1.19,
                  transition: {
                    duration: _consts.muitipleBaseDuration / 3,
                    ease: 'easeOut'
                  }
                });

              case 11:
                _context.next = 13;
                return wrapAnim.start({
                  scale: 1,
                  transition: {
                    duration: _consts.muitipleBaseDuration / 3 * 2,
                    ease: 'easeIn'
                  }
                });

              case 13:
                log('resolve!!');
                resolve();
                setClicked({
                  key: choiceOrder,
                  animating: false
                });

              case 16:
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

  return _react2.default.createElement(
    'div',
    { ref: measureRef },
    contentRect.bounds.width ? _react2.default.createElement(
      WrapFrame,
      { animate: wrapAnim, clicked: clicked },
      _react2.default.createElement(
        CoverFrame,
        {
          initial: {
            left: type == 'likert' ? 0 : -(contentRect.bounds.width + 30), // Add 30px To fix galaxy issue
            scale: type == 'likert' ? 0 : 1
          },
          animate: coverAnim,
          clicked: clicked
        },
        _react2.default.createElement(BGGrdient, { clicked: clicked })
      ),
      _react2.default.createElement(
        TextFrame,
        {
          initial: {
            opacity: 0
          },
          animate: coverTextAnim,
          onTap: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      log('onTap! - AnswerMultipleComp');
                      log('contentRect.bounds.width', contentRect.bounds.width);

                      if (_datas.answer.clicking) {
                        _context2.next = 33;
                        break;
                      }

                      _datas.answer.clicking = true;

                      if (!(type == 'likert')) {
                        _context2.next = 23;
                        break;
                      }

                      _context2.next = 7;
                      return (0, _animate.likertCircle)(choiceOrder);

                    case 7:

                      // scale anim
                      coverAnim.start({
                        scale: 1,
                        transition: {
                          duration: _consts.muitipleBaseDuration,
                          ease: 'easeInOut'
                        }
                      });

                      _context2.next = 10;
                      return throwAnim();

                    case 10:
                      _context2.next = 12;
                      return coverTextAnim.start({
                        opacity: 1,
                        transition: {
                          duration: 0.42,
                          ease: 'easeInOut'
                        }
                      });

                    case 12:

                      // answerEndAnim
                      _datas.likert.transition = {
                        duration: 0.54,
                        ease: 'linear'
                      };
                      _datas.likert.opacity = 0;
                      _datas.likert.descTransition = {
                        duration: 0.54,
                        ease: 'linear'
                      };
                      _datas.likert.descOpacity = 0;
                      _context2.next = 18;
                      return (0, _utils.sleep)(0.54);

                    case 18:

                      // init value
                      _datas.likert.top = 124;
                      _datas.likert.opacity = 1;
                      _datas.likert.descOpacity = 1;
                      _context2.next = 31;
                      break;

                    case 23:
                      if (!(type == 'multiple')) {
                        _context2.next = 31;
                        break;
                      }

                      // show Cover
                      coverAnim.start({
                        left: 0,
                        transition: {
                          duration: 0.42,
                          ease: 'linear'
                        }
                      });

                      // show Text
                      _context2.next = 27;
                      return coverTextAnim.start({
                        opacity: 1,
                        transition: {
                          duration: 0.42,
                          ease: 'easeInOut'
                        }
                      });

                    case 27:
                      _context2.next = 29;
                      return throwAnim();

                    case 29:
                      _context2.next = 31;
                      return (0, _utils.sleep)(0.34);

                    case 31:
                      (0, _handlers.handleAnswerClick)(choiceOrder, null);
                      _datas.answer.clicking = false;

                    case 33:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, undefined);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }()
        },
        choice.koDescription
      )
    ) : ''
  );
};

exports.default = (0, _reactMeasure.withContentRect)('bounds')(ChoiceCover);