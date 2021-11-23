'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handlers = require('../handlers');

var handler = function handler() {
  (0, _handlers.addChat)({
    questionType: 'greetings',
    koDescription: "You've already finished talking with me, or it's not time to talk ~"
  });
};

exports.default = handler;