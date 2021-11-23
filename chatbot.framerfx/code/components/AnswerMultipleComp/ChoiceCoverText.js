'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n  z-index: 1;\n  cursor: pointer;\n\n  /* > div { */\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 12.5px;\n  font-weight: bold;\n  line-height: 35px;\n  /* } */\n'], ['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n  z-index: 1;\n  cursor: pointer;\n\n  /* > div { */\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 12.5px;\n  font-weight: bold;\n  line-height: 35px;\n  /* } */\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../shared/utils');

var _handlers = require('../../handlers');

var _consts = require('../../shared/consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceCoverTextFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var ChoiceCoverText = function ChoiceCoverText(_ref) {
  var choice = _ref.choice,
      contentRect = _ref.contentRect,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choice', 'contentRect']);

  var coverAnim = (0, _framer.useAnimation)();
  var coverTextAnim = (0, _framer.useAnimation)();

  return _react2.default.createElement(
    ChoiceCoverTextFrame,
    {
      initial: {
        opacity: 0
      },
      animate: coverTextAnim,
      onTap: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  log('onTap! - AnswerMultipleComp');
                  log('e', e);

                  // Animate choiceOrder Cover
                  coverAnim.start({
                    left: -contentRect.bounds.width,
                    transition: {
                      duration: 0
                    }
                  });
                  coverAnim.start({
                    left: 0,
                    transition: {
                      duration: _consts.defaultDuration
                    }
                  });

                  _context.next = 6;
                  return (0, _utils.sleep)(0.15);

                case 6:

                  // show coverText
                  coverTextAnim.start({
                    opacity: 1,
                    transition: {
                      duration: _consts.defaultDuration
                    }
                  });

                  _context.next = 9;
                  return (0, _utils.sleep)(_consts.defaultDuration);

                case 9:

                  log('handleAnswerClick!');
                  // handleAnswerClick(choiceOrder, null)

                  // Init Animation Values
                  // for (let i = 0; i < coverAnim.length; i++) {
                  //   coverAnim[i].start({
                  //     left: -1000,
                  //     transition: {
                  //       duration: 0,
                  //     },
                  //   })
                  //   coverTextAnim.start({
                  //     opacity: 0,
                  //     transition: {
                  //       duration: 0,
                  //     },
                  //   })
                  // }

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    },
    choice.koDescription
  );
};

exports.default = ChoiceCoverText;