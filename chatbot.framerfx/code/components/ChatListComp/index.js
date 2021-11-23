'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  overflow: scroll;\n  /* padding for preventing cropping answers */\n  padding-bottom: 100px;\n  background: white;\n  height: 100%;\n  padding-left: 49.5px;\n  padding-right: 15.5px;\n  padding-top: 35.5px;\n  /* fix right border of Main not show up */\n  border-right: 2.5px solid #ebebeb;\n  border-left: 2.5px solid #ebebeb;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n'], ['\n  overflow: scroll;\n  /* padding for preventing cropping answers */\n  padding-bottom: 100px;\n  background: white;\n  height: 100%;\n  padding-left: 49.5px;\n  padding-right: 15.5px;\n  padding-top: 35.5px;\n  /* fix right border of Main not show up */\n  border-right: 2.5px solid #ebebeb;\n  border-left: 2.5px solid #ebebeb;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n'], ['\n  position: relative;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Chat = require('../../../code/Chat');

var _utils = require('../../shared/utils');

var _consts = require('../../shared/consts');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _Lychee = require('./Lychee');

var _Lychee2 = _interopRequireDefault(_Lychee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var ChatWrap = _styledComponents2.default.div(_templateObject2);

var ChatListComp = function ChatListComp(_ref) {
  var chatList = _ref.chatList,
      props = (0, _objectWithoutProperties3.default)(_ref, ['chatList']);

  return _react2.default.createElement(
    Wrap,
    { className: 'chat-list' },
    (0, _map2.default)(chatList, function (chat, id) {
      return _react2.default.createElement(
        ChatWrap,
        { key: id },
        id == 0 || chat.questionType && // show Lychee when it's a question
        !chatList[id - 1].questionType ? // show Lychee only after an answer
        _react2.default.createElement(_Lychee2.default, null) : '',
        _react2.default.createElement(_Chat.Chat, {
          index: id,
          chat: chat,
          questionType: chat.questionType,
          answerType: chat.answerType
        })
      );
    })
  );
};

exports.default = ChatListComp;