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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /* background: rebeccapurple; */\n  position: absolute;\n  width: 100%;\n  bottom: 68px;\n'], ['\n  /* background: rebeccapurple; */\n  position: absolute;\n  width: 100%;\n  bottom: 68px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 331px;\n  min-height: 33.5px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 15.25px 15.25px 15.25px 5px;\n  resize: none;\n  padding: 10.5px 62px 10px 17.5px;\n\n  /* fonts */\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 18.25px;\n  color: #292929;\n\n  /* inner border */\n  border: none;\n  -o-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n\n  /* Remove textarea inner shadow on Mobile Safari (iPhone) */\n  -webkit-appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  width: 331px;\n  min-height: 33.5px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 15.25px 15.25px 15.25px 5px;\n  resize: none;\n  padding: 10.5px 62px 10px 17.5px;\n\n  /* fonts */\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 18.25px;\n  color: #292929;\n\n  /* inner border */\n  border: none;\n  -o-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n\n  /* Remove textarea inner shadow on Mobile Safari (iPhone) */\n  -webkit-appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 27.5px;\n  height: 27.5px;\n  background-color: #bfbfbf;\n  border-radius: 200px;\n  position: absolute;\n  right: calc(50% - 165.5px + 3px);\n  bottom: 3px;\n  cursor: pointer;\n  ', '\n'], ['\n  width: 27.5px;\n  height: 27.5px;\n  background-color: #bfbfbf;\n  border-radius: 200px;\n  position: absolute;\n  right: calc(50% - 165.5px + 3px);\n  bottom: 3px;\n  cursor: pointer;\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      background: linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289);\n    '], ['\n      background: linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289);\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  width: 15.25px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n'], ['\n  width: 15.25px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _handlers = require('../../handlers');

var _datas = require('../../datas');

var _utils = require('../../shared/utils');

var _resource = require('framer/resource');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _reactAutosizeTextarea = require('react-autosize-textarea');

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);
var TextBox = (0, _styledComponents2.default)(_reactAutosizeTextarea2.default)(_templateObject2);
var SendIcon = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject4);
});
var Arrow = _styledComponents2.default.img(_templateObject5);

var AnswerCommentComp = function AnswerCommentComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  return _react2.default.createElement(
    Wrap,
    null,
    _react2.default.createElement(TextBox, {
      onResize: function onResize(e) {},
      onChange: function onChange(e) {
        setComment(e.target.value);
      },
      onClick: function onClick() {
        return (0, _utils.scrollToLastChat)();
      } // fix galaxy issue that keyboard covers chatList
    }),
    _react2.default.createElement(
      SendIcon,
      {
        onClick: function onClick() {
          (0, _handlers.handleAnswerClick)(comment, null);
        },
        active: comment
      },
      _react2.default.createElement(Arrow, { src: (0, _resource.url)('../images/arrow-01.svg') })
    )
  );
};

exports.default = AnswerCommentComp;