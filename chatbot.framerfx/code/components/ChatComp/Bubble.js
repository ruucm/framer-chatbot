'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n\n  ', '\n\n      \n  /* Only Question Styles */\n  ', '\n\n    ', '\n\n \n  /* Only Answer Styles */\n  ', '\n\n    ', '\n\n  ', '\n\n  ', '\n\n\n'], ['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n\n  ', '\n\n      \n  /* Only Question Styles */\n  ', '\n\n    ', '\n\n \n  /* Only Answer Styles */\n  ', '\n\n    ', '\n\n  ', '\n\n  ', '\n\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        padding: 0;\n      }\n    '], ['\n      ', ' {\n        padding: 0;\n      }\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n        max-width: ', 'px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    '], ['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n        max-width: ', 'px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          /* fix height of Img, cause it makes weird scroll */\n          height: 100px;\n          background: transparent !important;\n        }\n      '], ['\n        ', ' {\n          /* fix height of Img, cause it makes weird scroll */\n          height: 100px;\n          background: transparent !important;\n        }\n      ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        white-space: nowrap;\n      }\n    '], ['\n      ', ' {\n        white-space: nowrap;\n      }\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          background: transparent !important;\n          padding: 0;\n          height: 51px !important;\n        }\n\n        ', ' {\n          min-width: 100%;\n          min-height: 100%;\n        }\n      '], ['\n        ', ' {\n          background: transparent !important;\n          padding: 0;\n          height: 51px !important;\n        }\n\n        ', ' {\n          min-width: 100%;\n          min-height: 100%;\n        }\n      ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        /* background: linear-gradient(\n          92deg,\n          #fd8d58,\n          #fd5664 50%,\n          #e35289\n        ) !important; */\n        width: 115px;\n        height: 30px;\n      }\n\n      ', ' {\n        width: 100%;\n        padding: 0;\n        object-fit: contain;\n      }\n    '], ['\n      ', ' {\n        /* background: linear-gradient(\n          92deg,\n          #fd8d58,\n          #fd5664 50%,\n          #e35289\n        ) !important; */\n        width: 115px;\n        height: 30px;\n      }\n\n      ', ' {\n        width: 100%;\n        padding: 0;\n        object-fit: contain;\n      }\n    ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        text-align: left !important;\n      }\n    '], ['\n      ', ' {\n        text-align: left !important;\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require('./');

var _consts = require('../../shared/consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BubbleFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject, function (props) {
  return props.isImg && (0, _styledComponents.css)(_templateObject2, _.Content);
}, function (props) {
  return props.questionType && (0, _styledComponents.css)(_templateObject3, _.Content, 549 / 2, _.Text);
}, function (props) {
  return props.questionType && props.isImg && (0, _styledComponents.css)(_templateObject4, _.Content);
}, function (props) {
  return props.answerType == 'Multiple Choice' && !props.questionType && (0, _styledComponents.css)(_templateObject5, _.Text);
}, function (props) {
  return props.answerType == 'Emoji Rating' && !props.questionType && (0, _styledComponents.css)(_templateObject6, _.Content, _.Img);
}, function (props) {
  return props.answerType == 'Star Rating' && !props.questionType && (0, _styledComponents.css)(_templateObject7, _.Content, _.Img);
}, function (props) {
  return props.answerType == 'Comment' && !props.questionType && (0, _styledComponents.css)(_templateObject8, _.Text);
});

var Bubble = function Bubble(_ref) {
  var questionType = _ref.questionType,
      answerType = _ref.answerType,
      isImg = _ref.isImg,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType', 'answerType', 'isImg', 'children']);

  var questionInitial = {
    scale: 0
  };
  var answerInitial = {
    scale: 1
  };
  return _react2.default.createElement(
    BubbleFrame,
    {
      initial: questionType ? questionInitial : answerInitial,
      animate: {
        scale: 1
      },
      originX: 0,
      originY: 1,
      transition: {
        scale: { duration: 0.33, ease: _consts.powerEaseInOut },
        delay: _consts.delayBeforeNewQuestion
      },
      questionType: questionType,
      answerType: answerType,
      isImg: isImg,
      className: 'chat' // for auto scrolling
    },
    children
  );
};

exports.default = Bubble;