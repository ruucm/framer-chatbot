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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _datas = require('../../datas');

var _consts = require('../../shared/consts');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _ChoiceCover = require('./ChoiceCover');

var _ChoiceCover2 = _interopRequireDefault(_ChoiceCover);

var _Choice = require('./Choice');

var _Choice2 = _interopRequireDefault(_Choice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrap = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var AnswerMultipleComp = function AnswerMultipleComp(_ref) {
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
        {
          key: choiceOrder,
          initial: {
            top: 88
          },
          animate: {
            top: 0
          },
          transition: {
            top: {
              duration: _consts.baseDuration,
              ease: _consts.powerEaseInOut
            },
            opacity: {
              duration: _consts.baseDuration,
              ease: 'linear'
            },
            delay: 0.33 + 0.77
          }
        },
        _react2.default.createElement(_ChoiceCover2.default, {
          type: 'multiple',
          choice: choice,
          choiceOrder: choiceOrder,
          clicked: clicked,
          setClicked: setClicked
        }),
        _react2.default.createElement(_Choice2.default, {
          choice: choice,
          choiceOrder: choiceOrder,
          clicked: clicked
        })
      );
    })
  );
};

exports.default = AnswerMultipleComp;