"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.delayBeforeNewAnswerType =
  exports.delayBeforeNewQuestion =
  exports.chatInterval =
  exports.powerEaseInOut =
  exports.loadingEndAnimDuration =
  exports.loadingDuration =
  exports.muitipleBaseDuration =
  exports.baseDuration =
  exports.token =
  exports.assetsEndPoint =
  exports.endPoint =
  exports.isProd =
    undefined

var _ruucmUtil = require("ruucm-util")

var isProd = (exports.isProd = true)

var endPoint = (exports.endPoint = "https://api.chatbot.co/api")
var assetsEndPoint = (exports.assetsEndPoint = "https://static.chatbot.co")

var token = (exports.token = (0, _ruucmUtil.getParameterByName)("token"))
console.log("token", token)

// Animation
var baseDuration = (exports.baseDuration = 0.67)
var muitipleBaseDuration = (exports.muitipleBaseDuration = baseDuration / 2)
var loadingDuration = (exports.loadingDuration = 1 / 1.5)
var loadingEndAnimDuration = (exports.loadingEndAnimDuration = 0.3)
var powerEaseInOut = (exports.powerEaseInOut = [0.66, 0.13, 0.36, 0.97])

// intervals
var chatInterval = (exports.chatInterval = isProd
  ? 0.97 + loadingDuration
  : 0.1)
var delayBeforeNewQuestion = (exports.delayBeforeNewQuestion = isProd ? 0.1 : 0)
var delayBeforeNewAnswerType = (exports.delayBeforeNewAnswerType = 1.6)
