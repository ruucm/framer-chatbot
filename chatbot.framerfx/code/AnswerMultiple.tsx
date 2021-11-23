import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import AnswerMultipleComp from './components/AnswerMultipleComp'

type Props = {}

export class AnswerMultiple extends React.Component<Props> {
  render() {
    return <AnswerMultipleComp {...this.props} />
  }

  static defaultProps: Props = {}

  static propertyControls: PropertyControls<Props> = {}
}
