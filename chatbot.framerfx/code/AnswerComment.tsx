import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import AnswerCommentComp from './components/AnswerCommentComp'

type Props = {}

export class AnswerComment extends React.Component<Props> {
  render() {
    return <AnswerCommentComp {...this.props} />
  }

  static defaultProps: Props = {}

  static propertyControls: PropertyControls<Props> = {}
}
