'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = require('../datas');

var _utils = require('../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animFix = 1 / 2;

var animate = function animate(i) {
  return new Promise(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve) {
      var animateLarge, animatingLarge, animateMedium, animatingMedium, animateSmall, animatingSmall;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              animateLarge = function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(i, to, transition) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _datas.likert.largeScaleTransition = transition;
                          _datas.likert.largeScale[i] = to;

                        case 2:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined);
                }));

                return function animateLarge(_x2, _x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }();

              animatingLarge = function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          // LikertCircleLarge
                          animateLarge(i, 0.933, {
                            duration: 0.57 * animFix,
                            ease: 'easeIn'
                          });
                          _context2.next = 3;
                          return (0, _utils.sleep)(0.57 * animFix);

                        case 3:

                          animateLarge(i, 0.68, {
                            duration: 0.97 * animFix,
                            ease: 'easeInOut'
                          });
                          _context2.next = 6;
                          return (0, _utils.sleep)((0.97 + 0.1) * animFix);

                        case 6:

                          animateLarge(i, 0.933, {
                            duration: 0.6 * animFix,
                            ease: 'linear'
                          });
                          _context2.next = 9;
                          return (0, _utils.sleep)(0.6 * animFix);

                        case 9:

                          animateLarge(i, 0.68, {
                            duration: 0.97 * animFix,
                            ease: 'easeInOut'
                          });
                          _context2.next = 12;
                          return (0, _utils.sleep)(0.97 * animFix);

                        case 12:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, undefined);
                }));

                return function animatingLarge() {
                  return _ref3.apply(this, arguments);
                };
              }();

              animateMedium = function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(i, to, transition) {
                  return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _datas.likert.mediumScaleTransition = transition;
                          _datas.likert.mediumScale[i] = to;

                        case 2:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, undefined);
                }));

                return function animateMedium(_x5, _x6, _x7) {
                  return _ref4.apply(this, arguments);
                };
              }();

              animatingMedium = function () {
                var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                  return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          // LikertCircleMedium
                          animateMedium(i, 0.84, {
                            duration: 0.53 * animFix,
                            ease: 'easeIn'
                          });
                          _context4.next = 3;
                          return (0, _utils.sleep)(0.53 * animFix);

                        case 3:

                          animateMedium(i, 0.612, {
                            duration: 0.64 * animFix,
                            ease: 'easeInOut'
                          });
                          _context4.next = 6;
                          return (0, _utils.sleep)((0.64 + 0.16) * animFix);

                        case 6:

                          animateMedium(i, 0.84, {
                            duration: 0.34 * animFix,
                            ease: 'linear'
                          });
                          _context4.next = 9;
                          return (0, _utils.sleep)(0.34 * animFix);

                        case 9:

                          animateMedium(i, 0.612, {
                            duration: 0.33 * animFix,
                            ease: 'easeInOut'
                          });
                          _context4.next = 12;
                          return (0, _utils.sleep)(0.33 * animFix);

                        case 12:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  }, _callee4, undefined);
                }));

                return function animatingMedium() {
                  return _ref5.apply(this, arguments);
                };
              }();

              animateSmall = function () {
                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(i, to, transition) {
                  return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _datas.likert.smallScaleTransition = transition;
                          _datas.likert.smallScale[i] = to;

                        case 2:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  }, _callee5, undefined);
                }));

                return function animateSmall(_x8, _x9, _x10) {
                  return _ref6.apply(this, arguments);
                };
              }();

              animatingSmall = function () {
                var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                  return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          // LikertCircleSmall
                          animateSmall(i, 0.7, {
                            duration: 0.43 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 3;
                          return (0, _utils.sleep)(0.43 * animFix);

                        case 3:

                          animateSmall(i, 0.509, {
                            duration: 0.26 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 6;
                          return (0, _utils.sleep)(0.26 * animFix);

                        case 6:

                          animateSmall(i, 0.4, {
                            duration: 0.48 * animFix,
                            ease: 'linear'
                          });
                          _context6.next = 9;
                          return (0, _utils.sleep)(0.48 * animFix);

                        case 9:

                          animateSmall(i, 0.7, {
                            duration: 0.77 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 12;
                          return (0, _utils.sleep)(0.77 * animFix);

                        case 12:

                          animateSmall(i, 0.51, {
                            duration: 0.42 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 15;
                          return (0, _utils.sleep)(0.42 * animFix);

                        case 15:
                        case 'end':
                          return _context6.stop();
                      }
                    }
                  }, _callee6, undefined);
                }));

                return function animatingSmall() {
                  return _ref7.apply(this, arguments);
                };
              }();

              animatingLarge();
              animatingMedium();
              animatingSmall();

              // wait until animatingLarge end
              _context7.next = 11;
              return (0, _utils.sleep)(3.11 * animFix);

            case 11:

              // init values
              animateLarge(i, 0, {
                duration: 0
              });
              animateMedium(i, 0, {
                duration: 0
              });
              animateSmall(i, 0, {
                duration: 0
              });

              resolve();

            case 15:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.default = animate;