import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import ChatComp from "./components/ChatComp"

type Props = { text: string }

export class Chat extends React.Component<Props> {
  render() {
    return <ChatComp {...this.props} />
  }

  static defaultProps: Props = {
    text: "Hello Chatbot!",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
  }
}
