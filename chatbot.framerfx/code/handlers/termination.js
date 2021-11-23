'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datas = require('../datas');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _consts = require('../shared/consts');

var _utils = require('../shared/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler() {
  //  send results
  log('send results!', _datas.answer.result);

  if (_consts.token == 'demo') {
    console.log('demo end');
    (0, _utils.scrollToLastChat)();
    (0, _utils.closeWindow)();
  } else if (_datas.answer.currentQuestion.questionType == 'Remind')
    // handle Remind termination
    _axios2.default.post(_consts.endPoint + '/Surveys/delaySurvey/' + _consts.token, {
      token: _consts.token,
      hoursToDelay: _datas.answer.result[_datas.answer.result.length - 1].choiceScore
    }).then(function (response) {
      log('response - (Remind)', response);
      (0, _utils.scrollToLastChat)();
      (0, _utils.closeWindow)();
    }).catch(function (error) {
      log('error - (Remind)', error);
    });else _axios2.default.post(_consts.endPoint + '/Surveys/submit/' + _consts.token, {
    token: _consts.token,
    answers: _datas.answer.result
  }).then(function (response) {
    log('response', response);
    (0, _utils.scrollToLastChat)();
    (0, _utils.closeWindow)();
  }).catch(function (error) {
    log('error', error);
  });

  // hide answerType
  _datas.answer.type = 'None';
};

exports.default = handler;