import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import AnswerLikertDescComp from './components/AnswerLikertDescComp'

type Props = {}

export class AnswerLikertDesc extends React.Component<Props> {
  render() {
    return <AnswerLikertDescComp {...this.props} />
  }

  static defaultProps: Props = {}

  static propertyControls: PropertyControls<Props> = {}
}
