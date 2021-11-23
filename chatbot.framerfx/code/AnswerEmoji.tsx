import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import AnswerEmojiComp from './components/AnswerEmojiComp'

type Props = {}

export class AnswerEmoji extends React.Component<Props> {
  render() {
    return <AnswerEmojiComp {...this.props} />
  }

  static defaultProps: Props = {}

  static propertyControls: PropertyControls<Props> = {}
}
