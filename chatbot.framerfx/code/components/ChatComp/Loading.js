'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 25.25px;\n  height: 18px;\n'], ['\n  width: 25.25px;\n  height: 18px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = require('../../shared/consts');

var _Bubble = require('./Bubble');

var _Bubble2 = _interopRequireDefault(_Bubble);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var Loading = function Loading(_ref) {
  var questionType = _ref.questionType,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType']);

  return _react2.default.createElement(
    _Bubble2.default,
    { questionType: 1 },
    _react2.default.createElement(
      _.Content,
      null,
      _react2.default.createElement(
        _.Text,
        null,
        _react2.default.createElement(
          Wrap,
          null,
          _react2.default.createElement(
            _framer.Stack,
            {
              direction: 'horizontal',
              distribution: 'center',
              background: '#ebebeb',
              size: '100%',
              gap: 4.69,
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              },
              transition: {
                delay: _consts.loadingDuration,
                duration: _consts.loadingEndAnimDuration,
                ease: 'easeInOut'
              }
            },
            _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'white', opacity: 0.25, radius: 20 }),
            _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'white', opacity: 0.5, radius: 20 }),
            _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'white', opacity: 1, radius: 20 })
          )
        )
      )
    )
  );
};

exports.default = Loading;