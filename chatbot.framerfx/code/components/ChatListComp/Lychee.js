'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _framer = require('framer');

var _resource = require('framer/resource');

var _utils = require('../../shared/utils');

var _consts = require('../../shared/consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lychee = function Lychee() {
  var anim = (0, _framer.useAnimation)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      revealed = _useState2[0],
      setRevealed = _useState2[1];

  (0, _react.useEffect)(function () {
    var startLycheeAnim = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _utils.sleep)(_consts.delayBeforeNewQuestion);

              case 2:
                _context.next = 4;
                return anim.start({
                  scale: 1.193,
                  transition: {
                    duration: 0.16,
                    ease: 'easeInOut'
                  }
                });

              case 4:
                anim.start({
                  scale: 1,
                  transition: {
                    duration: 0.14,
                    ease: 'easeInOut'
                  }
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function startLycheeAnim() {
        return _ref.apply(this, arguments);
      };
    }();

    if (!revealed) {
      startLycheeAnim();
      setRevealed(true);
    }
  });
  return _react2.default.createElement(_framer.Frame
  // width={26.5}
  // height={25.5} <- .5 crops image after animation
  , { width: 27,
    height: 26,
    left: -36,
    style: {
      background: 'center / contain no-repeat url("' + (0, _resource.url)('../images/lychee.png') + '")'
    },
    initial: { scale: 0 },
    animate: anim
  });
};

exports.default = Lychee;