import { Animatable, Data } from "framer"
import { url } from "framer/resource"

const visible = false
const name = "CHATBOT"
const logo =
  "center / contain no-repeat url(" + url("../images/chatbot-logo.png") + ")"
const sector = ""

export default Data({
  visible,
  name,
  logo,
  sector,
})
