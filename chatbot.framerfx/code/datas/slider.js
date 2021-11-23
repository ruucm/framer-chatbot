'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = require('framer');

var _resource = require('framer/resource');

var optionValue = null;
var knobSize = (0, _framer.Animatable)(30);
var tint = (0, _framer.Animatable)('blue');

exports.default = (0, _framer.Data)({
  optionValue: optionValue,
  knobSize: knobSize,
  tint: tint
});