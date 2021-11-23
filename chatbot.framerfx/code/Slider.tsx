import * as React from 'react'
import { Frame, Point, Draggable, PropertyControls, ControlType } from 'framer'
import { url } from 'framer/resource'
import styled, { css } from 'styled-components'

const NumbersWrap = styled.div`
  background: green;
  width: calc(100% - 35.5px);
  margin: 0 auto;
  margin-top: -${15 + 13}px;
  position: relative;

  ${props =>
    props.knobSize &&
    css`
      width: calc(100% - ${props.knobSize}px);
    `}
`
const Number = styled.div`
  font-family: Spoqa Han Sans;
  font-size: 16.25px;
  font-weight: bold;
  line-height: 0.86;
  color: #cccbcb;
  transform: translateX(-50%);

  position: absolute;
  ${props =>
    props.order &&
    css`
      left: ${props.order * 10}%;
    `}

  ${props =>
    props.active &&
    css`
      color: #000000;
    `}
`
const Track = styled(Frame)`
  background: #cccbcb !important;
`
const TrackBG = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  z-index: -1;
  ${props =>
    props.knobSize &&
    css`
      width: calc(100% - ${props.knobSize}px);
      padding: 9px ${props.knobSize / 2}px;
    `}
`
const Line = styled.div`
  width: 1px;
  border-radius: 2px;
  height: calc(100% - 18px);
  background: white;
  position: absolute;
  ${props =>
    props.order >= 0 &&
    css`
      left: ${props.order * 10}%;
    `}
`

export interface Props {
  value: number
  onValueChange: (value: number) => void
  knob: string
  track: string
  tint: string
  width: number
  height: number
  min: number
  max: number
  knobSize: number
  shadow: number
  trackHeight: number
  left: number
  constrained: boolean
}

interface State {
  value: number
  propsValue: number
  knobOffset: number
}

const modulate = (value, r1, r2) => {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0]
}

var tempValue = -1

export class Slider extends React.Component<Partial<Props>, State> {
  static defaultProps = {
    width: 278,
    height: 38.5,
    value: 50,
    knob: 'center / contain no-repeat url(' + url('../images/knob.svg') + ')',
    track:
      'center / cover no-repeat url(' + url('../images/slider-bg.png') + ')',
    tint: 'linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%)',
    min: 0,
    max: 100,
    knobSize: 35.5,
    shadow: 'rgba(0,0,0,0)',
    trackHeight: 38.5,
    constrained: true,
  }

  static propertyControls: PropertyControls<Props> = {
    tint: { type: ControlType.Color, title: 'Tint' },
    track: { type: ControlType.Color, title: 'Track' },
    shadow: { type: ControlType.Color, title: 'Shadow' },
    min: { type: ControlType.Number, title: 'Min', min: 0 },
    max: { type: ControlType.Number, title: 'Max', min: 0, max: 360 },
    value: { type: ControlType.Number, title: 'Value', min: 0, max: 360 },
    knobSize: { type: ControlType.Number, title: 'Knob', min: 20, max: 50 },
    trackHeight: {
      type: ControlType.Number,
      title: 'Height',
      min: 1,
      max: 500,
    },
    constrained: { type: ControlType.Boolean, title: 'Constrain' },
  }

  state = {
    value: Slider.defaultProps.value,
    propsValue: Slider.defaultProps.value,
    knobOffset: 0,
  }

  componentDidMount() {
    const { value, onValueChange } = this.props
    this.setState({ value })

    if (onValueChange) {
      onValueChange(value)
    }
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return {
      propsValue: props.value,
      value: props.value !== state.propsValue ? props.value : state.value,
    }
  }

  onMove = (event: Point) => {
    const { onValueChange } = this.props
    const value = this.pointToValue(event.x)
    this.setState({ value })

    if (onValueChange) {
      onValueChange(value)
    }
  }

  valueToPoint = value => {
    const { min, max, width, constrained, knobSize } = this.props
    if (constrained) {
      return modulate(value, [min, max], [0, width - knobSize])
    } else {
      return modulate(value, [min, max], [-knobSize / 2, width - knobSize / 2])
    }
  }

  pointToValue = point => {
    const { min, max, width, constrained, knobSize } = this.props
    if (constrained) {
      return modulate(point, [0, width - knobSize], [min, max])
    } else {
      return modulate(point, [-knobSize / 2, width - knobSize / 2], [min, max])
    }
  }

  render() {
    const {
      knob,
      track,
      tint,
      width,
      height,
      knobSize,
      trackHeight,
      constrained,
      min,
      max,
    } = this.props

    let left = this.valueToPoint(max)
    let ratio = (left + knobSize / 2) / width

    if (this.state.value < max) {
      left = this.valueToPoint(this.state.value)
      ratio = (left + knobSize / 2) / width
    }
    if (min > this.state.value) {
      ratio = this.valueToPoint(min) / width
      left = this.valueToPoint(min)
    }

    if (min === max && max < this.state.value) {
      ratio = 1
      if (constrained) {
        left = width - knobSize
      } else {
        left = width - knobSize / 2
      }
    }

    if (
      (min === max && max > this.state.value) ||
      (min === max && min === this.state.value)
    ) {
      ratio = 0
      if (constrained) {
        left = 0
      } else {
        left = -knobSize / 2
      }
    }

    const constraintsX = constrained ? 0 : -knobSize / 2
    const constraintsWidth = constrained ? width : width + knobSize

    if (ratio > 1) {
      ratio = 1
    } else if (ratio < 0) {
      ratio = 0
    }

    const constraints = {
      x: constraintsX,
      y: height / 2 - knobSize / 2,
      width: constraintsWidth,
      height: knobSize,
    }

    return (
      <>
        <NumbersWrap knobSize={knobSize}>
          <Frame
            width="100%"
            height="100%"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.54,
              ease: 'linear',
            }}
          >
            <Number
              active={0 <= this.state.value && this.state.value < max * 0.05}
              order={0}
            >
              0
            </Number>
            <Number
              active={
                max * 0.05 <= this.state.value && this.state.value < max * 0.15
              }
              order={1}
            >
              1
            </Number>
            <Number
              active={
                max * 0.15 <= this.state.value && this.state.value < max * 0.25
              }
              order={2}
            >
              2
            </Number>
            <Number
              active={
                max * 0.25 <= this.state.value && this.state.value < max * 0.35
              }
              order={3}
            >
              3
            </Number>
            <Number
              active={
                max * 0.35 <= this.state.value && this.state.value < max * 0.45
              }
              order={4}
            >
              4
            </Number>
            <Number
              active={
                max * 0.45 <= this.state.value && this.state.value < max * 0.55
              }
              order={5}
            >
              5
            </Number>
            <Number
              active={
                max * 0.55 <= this.state.value && this.state.value < max * 0.65
              }
              order={6}
            >
              6
            </Number>
            <Number
              active={
                max * 0.65 <= this.state.value && this.state.value < max * 0.75
              }
              order={7}
            >
              7
            </Number>
            <Number
              active={
                max * 0.75 <= this.state.value && this.state.value < max * 0.85
              }
              order={8}
            >
              8
            </Number>
            <Number
              active={
                max * 0.85 <= this.state.value && this.state.value < max * 0.95
              }
              order={9}
            >
              9
            </Number>
            <Number active={max * 0.95 <= this.state.value} order={10}>
              10
            </Number>
          </Frame>
        </NumbersWrap>
        <Track
          left={0}
          height={trackHeight}
          width={width}
          // top={(height - trackHeight) / 2}
          radius={50}
          overflow={'hidden'}
          initial={{
            top: (height - trackHeight) / 2 + 99,
            opacity: 0,
          }}
          animate={{
            top: (height - trackHeight) / 2,
            opacity: 1,
          }}
          transition={{
            duration: 0.54,
            opacity: {
              ease: 'linear',
            },
            top: {
              ease: 'easeInOut',
            },
          }}
        >
          <Frame
            width={`${(ratio +
            knobSize / width / 2 + // add half of knobSize
              (34 - 30) / width / 2) * // add little gap size
              100}%`}
            top={0}
            left={0}
            bottom={0}
            background={tint}
            radius={50}
          />
          <Draggable
            width={knobSize}
            height={knobSize}
            constraints={constraints}
            bounce={false}
            overdrag={false}
            onMove={this.onMove}
            horizontal={true}
            vertical={false}
            left={left}
            top={(height - this.props.knobSize) / 2}
            background={knob}
            radius={'50%'}
            momentum={false}
            onMouseUp={() => {
              var newValue = Math.round(this.state.value)
              if (tempValue != newValue) {
                // set tempValue
                tempValue = newValue
                this.setState({
                  value: newValue,
                })
              } else {
                // execute onTap
                this.props.confirm && this.props.confirm()
              }
              this.setState({
                value: newValue,
              })
            }}
            shadows={[
              {
                inset: false,
                color: `${this.props.shadow}`,
                x: 0,
                y: 1,
                blur: 2,
                spread: 0,
              },
              {
                inset: false,
                color: `${this.props.shadow}`,
                x: 0,
                y: 2,
                blur: 4,
                spread: 0,
              },
              {
                inset: false,
                color: `${this.props.shadow}`,
                x: 0,
                y: 4,
                blur: 8,
                spread: 0,
              },
            ]}
            style={{
              cursor: 'pointer',
            }}
          />
          <TrackBG knobSize={knobSize}>
            <Line order={0} />
            <Line order={1} />
            <Line order={2} />
            <Line order={3} />
            <Line order={4} />
            <Line order={5} />
            <Line order={6} />
            <Line order={7} />
            <Line order={8} />
            <Line order={9} />
            <Line order={10} />
          </TrackBG>
        </Track>
      </>
    )
  }
}
