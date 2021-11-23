import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import ChatListComp from './components/ChatListComp'

type Props = {}
export class ChatList extends React.Component<Props> {
  render() {
    return <ChatListComp {...this.props} />
  }

  static defaultProps: Props = {}

  static propertyControls: PropertyControls<Props> = {}
}
