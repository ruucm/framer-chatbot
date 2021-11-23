'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);
// const Circle = styled.div``

var Loading = function Loading(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  return _react2.default.createElement(
    _framer.Stack,
    {
      direction: 'horizontal',
      distribution: 'center',
      background: 'green',
      size: '100%'
    },
    _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'red' }),
    _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'red' }),
    _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'red' })
  );
};

exports.default = Loading;