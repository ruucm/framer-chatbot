'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = require('framer');

var _resource = require('framer/resource');

var optionTop = [0, 0, 0, 0, 0];

var optionOpacity = [1, 1, 1, 1, 1];
var optionOpacityTransition = {
  ease: 'linear'
};
var optionScale = [1, 1, 1, 1, 1];
var optionScaleTransition = {
  duration: 0.2
};

var optionBaseOpacity = [1, 1, 1, 1, 1];

var optionImg = ['center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')'];

var resultBG = ['center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-0.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-1.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-2.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-3.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-4.png') + '), #FD5863'];

var resultWidth = [298, 298, 298, 298, 215];
var resultOpacity = [0, 0, 0, 0, 0];
var resultBottom = [21, 21, 21, 21, 21];
var resultRight = [-32, -32, -32, -32, -32];

exports.default = (0, _framer.Data)({
  optionTop: optionTop,
  optionOpacity: optionOpacity,
  optionOpacityTransition: optionOpacityTransition,
  optionBaseOpacity: optionBaseOpacity,
  optionImg: optionImg,
  optionScale: optionScale,
  optionScaleTransition: optionScaleTransition,
  resultBG: resultBG,
  resultWidth: resultWidth,
  resultOpacity: resultOpacity,
  resultBottom: resultBottom,
  resultRight: resultRight
});