import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import AnswerLikertCoverComp from './components/AnswerLikertCoverComp'

type Props = {}

export class AnswerLikertCover extends React.Component<Props> {
  render() {
    return <AnswerLikertCoverComp {...this.props} />
  }

  static defaultProps: Props = {}

  static propertyControls: PropertyControls<Props> = {}
}
