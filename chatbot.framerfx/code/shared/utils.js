'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCanvas = exports.closeWindow = exports.isMobile = exports.scrollToLastChat = exports.goPageTop = exports.sleep = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _consts = require('./consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sleep = exports.sleep = function sleep(sec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, sec * 1000);
  });
};

var goPageTop = exports.goPageTop = function goPageTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

var scrollToLastChat = exports.scrollToLastChat = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
    var myScroll, target, goHere;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            myScroll = function myScroll(element, to, duration) {
              var start = element.scrollTop,
                  change = to - start,
                  currentTime = 0,
                  increment = 20;

              var animateScroll = function animateScroll() {
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if (currentTime < duration) {
                  setTimeout(animateScroll, increment);
                }
              };
              animateScroll();
            };
            // custom animating scroll from https://gist.github.com/andjosh/6764939


            //t = current time
            //b = start value
            //c = change in value
            //d = duration
            Math.easeInOutQuad = function (t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            };

            target = document.querySelectorAll('.chat-list');

            if (target.length > 0) {
              goHere = target[target.length - 1];

              myScroll(goHere, goHere.scrollHeight, 600);
            }

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function scrollToLastChat(_x) {
    return _ref.apply(this, arguments);
  };
}();

var isMobile = exports.isMobile = screen.width <= 730;

var closeWindow = exports.closeWindow = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var r;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return sleep(3);

          case 2:
            r = confirm(_consts.token == 'demo' ? 'Survey is now over. Do you want to close the survey window?' : '설문이 완료되었습니다. 설문창을 닫을까요?');

            if (r == true) {
              window.location.href = 'about:blank';
            }

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function closeWindow() {
    return _ref2.apply(this, arguments);
  };
}();

var regex = /^(file:\/\/)/g;
var found = location.href.match(regex);
var isCanvas = exports.isCanvas = found ? true : false;