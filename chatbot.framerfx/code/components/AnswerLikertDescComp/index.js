'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  width: 20% !important;\n  height: 100% !important;\n  background: transparent !important;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  &:first-child {\n    > div {\n      padding-left: 3vw;\n    }\n  }\n  &:last-child {\n    > div {\n      padding-right: 3vw;\n    }\n  }\n'], ['\n  display: inline-block;\n  width: 20% !important;\n  height: 100% !important;\n  background: transparent !important;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  &:first-child {\n    > div {\n      padding-left: 3vw;\n    }\n  }\n  &:last-child {\n    > div {\n      padding-right: 3vw;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  font-family: Spoqa Han Sans;\n  font-size: 10.25px;\n  font-weight: bold;\n  line-height: 1.22;\n  color: #000000;\n  padding: 0 1.5vw;\n'], ['\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  font-family: Spoqa Han Sans;\n  font-size: 10.25px;\n  font-weight: bold;\n  line-height: 1.22;\n  color: #000000;\n  padding: 0 1.5vw;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _handlers = require('../../handlers');

var _datas = require('../../datas');

var _utils = require('../../shared/utils');

var _resource = require('framer/resource');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Desc = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var DescText = _styledComponents2.default.div(_templateObject2);

var AnswerLikertDescComp = function AnswerLikertDescComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var choices = _datas.answer.currentQuestion.choices;
  return _react2.default.createElement(
    _framer.Stack,
    {
      center: true,
      size: '85%',
      direction: 'horizontal',
      distribution: 'center',
      gap: 0,
      style: {
        flexWrap: 'wrap',
        alignContent: 'center'
      }
    },
    (0, _map2.default)(choices, function (choice, choiceOrder) {
      return _react2.default.createElement(
        Desc,
        {
          key: choiceOrder,
          initial: {
            opacity: 0
          },
          animate: {
            opacity: _datas.likert.descOpacity
          },
          transition: _datas.likert.descTransition
        },
        _react2.default.createElement(DescText, {
          dangerouslySetInnerHTML: {
            __html: choice.koDescription
          }
        })
      );
    })
  );
};

exports.default = AnswerLikertDescComp;