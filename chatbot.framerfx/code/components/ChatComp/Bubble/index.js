'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n  ', '\n'], ['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    '], ['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require('../');

var _consts = require('../../../shared/consts');

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BubbleFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject, function (props) {
  return props.questionType && (0, _styledComponents.css)(_templateObject2, _.Content, _.Text);
});

var Bubble = function Bubble(_ref) {
  var questionType = _ref.questionType,
      children = _ref.children,
      index = _ref.index,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType', 'children', 'index']);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

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
      className: 'chat' // for auto scrolling
    },
    loading ? _react2.default.createElement(_Loading2.default, null) : children
  );
};

exports.default = Bubble;