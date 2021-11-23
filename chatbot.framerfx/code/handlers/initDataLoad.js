'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = require('../datas');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _consts = require('../shared/consts');

var _handlers = require('../handlers');

var _utils = require('../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log('init load!');

            if (_consts.token == 'demo' || _utils.isCanvas) {
              _datas.chats.questions = _datas.demoQuestions;
              _datas.company.sector = 'Demo';
              (0, _handlers.showNextQuestion)(-1); // add first chat
            } else _axios2.default.get(_consts.endPoint + '/Surveys/getSurvey' + '/' + _consts.token, {}).then(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _datas.chats.questions = res.data.survey.questions;
                        log('initDataLoad', res);
                        log('all questions', res.data.survey.questions);

                        _datas.company.name = res.data.company.name;
                        _datas.company.sector = res.data.company.sector;
                        _datas.company.logo = 'center / contain no-repeat url(' + _consts.assetsEndPoint + '/' + res.data.company.logo + ')';

                        (0, _handlers.showNextQuestion)(-1); // add first chat

                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()).catch(function (error) {
              log('error - (initDataLoad)', error);
              (0, _handlers.showNoQuestions)();
            });

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function handler() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;