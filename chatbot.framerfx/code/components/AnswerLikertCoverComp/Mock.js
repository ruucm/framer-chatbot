'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 35px;\n  border-radius: 35px;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  visibility: hidden;\n'], ['\n  line-height: 35px;\n  border-radius: 35px;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  visibility: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var Mock = function Mock(_ref) {
  var choice = _ref.choice,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choice']);

  return choice ? _react2.default.createElement(
    Wrap,
    null,
    choice.koDescription
  ) : '';
};

exports.default = Mock;