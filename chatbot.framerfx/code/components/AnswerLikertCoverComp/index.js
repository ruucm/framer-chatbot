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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 20% !important;\n  height: 50px !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n  background: blue;\n'], ['\n  width: 20% !important;\n  height: 50px !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n  background: blue;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  white-space: nowrap;\n'], ['\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  white-space: nowrap;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _datas = require('../../datas');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _ChoiceCover = require('../AnswerMultipleComp/ChoiceCover');

var _ChoiceCover2 = _interopRequireDefault(_ChoiceCover);

var _Mock = require('./Mock');

var _Mock2 = _interopRequireDefault(_Mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrap = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var Center = _styledComponents2.default.div(_templateObject2);

var AnswerLikertCoverComp = function AnswerLikertCoverComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)({
    key: -1,
    animating: false
  }),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return _react2.default.createElement(
    _framer.Stack,
    {
      size: '100%',
      direction: 'horizontal',
      distribution: 'center',
      gap: 0,
      style: {
        flexWrap: 'wrap',
        alignContent: 'center'
      }
    },
    (0, _map2.default)(_datas.answer.currentQuestion.choices, function (choice, choiceOrder) {
      return _react2.default.createElement(
        ChoiceWrap,
        { key: choiceOrder },
        _react2.default.createElement(
          Center,
          null,
          _react2.default.createElement(_ChoiceCover2.default, {
            type: 'likert',
            choice: choice,
            choiceOrder: choiceOrder,
            clicked: clicked,
            setClicked: setClicked
          }),
          _react2.default.createElement(_Mock2.default, { choice: choice })
        )
      );
    })
  );
};

exports.default = AnswerLikertCoverComp;