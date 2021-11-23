"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _framer = require("framer")

var _resource = require("framer/resource")

var visible = false
var name = "CHATBOT"
var logo =
  "center / contain no-repeat url(" +
  (0, _resource.url)("../images/chatbot-logo.png") +
  ")"
var sector = ""

exports.default = (0, _framer.Data)({
  visible: visible,
  name: name,
  logo: logo,
  sector: sector,
})
