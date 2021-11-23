'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = require('framer');

var top = 124;
var opacity = 1;
var transition = {
  duration: 0.34,
  ease: 'easeInOut'
};

var descOpacity = 1;
var descTransition = {
  duration: 0.33,
  delay: 0.14,
  ease: 'easeInOut'
};

var largeScale = [0, 0, 0, 0, 0];
var largeScaleTransition = {
  duration: 0
};

var mediumScale = [0, 0, 0, 0, 0];
var mediumScaleTransition = {
  duration: 0
};

var smallScale = [0, 0, 0, 0, 0];
var smallScaleTransition = {
  duration: 0
};

exports.default = (0, _framer.Data)({
  top: top,
  opacity: opacity,
  transition: transition,
  descOpacity: descOpacity,
  descTransition: descTransition,

  largeScale: largeScale,
  largeScaleTransition: largeScaleTransition,
  mediumScale: mediumScale,
  mediumScaleTransition: mediumScaleTransition,
  smallScale: smallScale,
  smallScaleTransition: smallScaleTransition
});