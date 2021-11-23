'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Img = exports.Content = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 15.25px 15.25px 5px 15.25px;\n  padding: 12px;\n\n  background: #fd5863 !important;\n  margin-bottom: 12px;\n  display: inline-block;\n  overflow: hidden;\n'], ['\n  border-radius: 15.25px 15.25px 5px 15.25px;\n  padding: 12px;\n\n  background: #fd5863 !important;\n  margin-bottom: 12px;\n  display: inline-block;\n  overflow: hidden;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  max-width: 100%;\n  height: 100%;\n'], ['\n  display: block;\n  max-width: 100%;\n  height: 100%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 13px;\n  letter-spacing: 0.205px;\n  color: #ffffff;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 13px;\n  letter-spacing: 0.205px;\n  color: #ffffff;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require('../../shared/consts');

var _utils = require('../../shared/utils');

var _Bubble = require('./Bubble');

var _Bubble2 = _interopRequireDefault(_Bubble);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
var Wrap = _styledComponents2.default.div(_templateObject);

var Content = exports.Content = _styledComponents2.default.div(_templateObject2);

var Img = exports.Img = _styledComponents2.default.img(_templateObject3);
var Text = exports.Text = (0, _styledComponents2.default)(_framer.Frame)(_templateObject4);

// Comp
var ChatComp = function ChatComp(_ref) {
  var questionType = _ref.questionType,
      answerType = _ref.answerType,
      chat = _ref.chat,
      text = _ref.text,
      index = _ref.index,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType', 'answerType', 'chat', 'text', 'index']);

  var questionInitial = {
    opacity: 0
  };
  var answerInitial = {
    opacity: 1
  };

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    var fakeLoading = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 1. scroll to loading
                (0, _utils.scrollToLastChat)();

                if (!questionType) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return (0, _utils.sleep)(_consts.loadingDuration + _consts.loadingEndAnimDuration);

              case 4:
                setLoading(false);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function fakeLoading() {
        return _ref2.apply(this, arguments);
      };
    }();
    fakeLoading();
  }, []);
  (0, _react.useEffect)(function () {
    if (!loading && questionType) (0, _utils.scrollToLastChat)(); // 3. scroll to question after loading End(!)
  }, [loading]);

  return loading && questionType ? _react2.default.createElement(_Loading2.default, { questionType: questionType }) : _react2.default.createElement(
    Wrap,
    null,
    chat.image ? _react2.default.createElement(
      _Bubble2.default,
      {
        questionType: questionType,
        answerType: answerType,
        isImg: true
      },
      _react2.default.createElement(
        Content,
        null,
        chat.image.includes('http') ? _react2.default.createElement(Img, { src: chat.image }) : _react2.default.createElement(Img, { src: _consts.assetsEndPoint + '/' + chat.image })
      )
    ) : '',
    chat.koDescription ? _react2.default.createElement(
      _Bubble2.default,
      { questionType: questionType, answerType: answerType },
      _react2.default.createElement(
        Content,
        null,
        _react2.default.createElement(
          Text,
          {
            initial: questionType ? questionInitial : answerInitial,
            animate: {
              opacity: 1
            },
            transition: {
              delay: 0.3,
              ease: 'easeInOut'
            }
          },
          chat.koDescription
        )
      )
    ) : ''
  );
};

exports.default = ChatComp;