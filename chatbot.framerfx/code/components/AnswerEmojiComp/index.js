'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _handlers = require('../../handlers');

var _utils = require('../../shared/utils');

var _resource = require('framer/resource');

var _Emoji = require('./Emoji');

var _Emoji2 = _interopRequireDefault(_Emoji);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _framer = require('framer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnswerEmojiComp = function AnswerEmojiComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)({
    key: -1,
    animating: false
  }),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var emojiTypes = ['angry', 'sad', 'normal', 'good', 'happy'];
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _framer.Stack,
      {
        size: '100%',
        direction: 'horizontal',
        distribution: 'center',
        gap: 19
      },
      (0, _map2.default)(emojiTypes, function (type, choiceOrder) {
        return _react2.default.createElement(_Emoji2.default, {
          key: choiceOrder,
          choiceOrder: choiceOrder,
          type: type,
          isBase: true,
          clicked: clicked,
          setClicked: setClicked
        });
      })
    ),
    _react2.default.createElement(
      _framer.Stack,
      {
        size: '100%',
        direction: 'horizontal',
        distribution: 'center',
        gap: 19
      },
      (0, _map2.default)(emojiTypes, function (type, choiceOrder) {
        return _react2.default.createElement(_Emoji2.default, {
          key: choiceOrder,
          choiceOrder: choiceOrder,
          type: type,
          clicked: clicked,
          setClicked: setClicked
        });
      })
    )
  );
};

exports.default = AnswerEmojiComp;