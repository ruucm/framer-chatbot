import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import styled, { createGlobalStyle, css } from 'styled-components'
// import bootstrapGrid from './bootstrap-grid'

const GlobalStyle = createGlobalStyle`

  ${props =>
    props.removeCursor &&
    css`
      .__framer-touch-cursor-area {
        cursor: initial !important;
      }
    `}
  ${props =>
    props.removeScaleDown &&
    css`
      /* @media screen and (max-width: 768px) { */
      .__framer-touch-cursor-area {
        height: 100% !important;
        position: initial !important;
        transform: initial !important;
        > div {
          width: initial !important;
          height: 100% !important;
          position: initial !important;
          transform: initial !important;
          > div {
            width: initial !important;
            height: 100% !important;
            position: initial !important;
            transform: initial !important;
            > div {
              width: initial !important;
              height: 100% !important;
              position: initial !important;
              transform: initial !important;
              > div {
                width: initial !important;
                position: initial !important;
                transform: initial !important;
                > div {
                  /* disable link transition */
                  /* width: initial !important;
                    height: 100% !important;
                    position: initial !important;
                    */
                  left: 50%;
                  transform: translateX(-50%) !important;
                  > div {
                    /* disable link transition */
                    /* width: initial !important;
                      height: 100% !important;
                      position: initial !important;
                    
                      &:first-child {
                        display: none !important;
                      } */
                    /* transform: initial !important; */
                    > div {
                      margin: 0 auto;
                      height: 100% !important;
                      position: initial !important;
                      /* transform: initial !important; */
                      @media screen and (max-width: 768px) {
                        margin: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      /* } */
    `}
  ${props =>
    props.overflowScroll &&
    css`
      body {
        overflow-y: scroll !important;
      }
    `}
  ${props =>
    props.enableFixed &&
    css`
      /* @media screen and (max-width: 768px) { */
      .__framer-touch-cursor-area {
        > div {
          > div {
            > div {
              will-change: initial !important;
              > div {
                > div {
                  will-change: initial !important;
                  transform: initial !important;
                  overflow: visible !important;
                  left: calc(50% - ${props.frameWidth / 2}px);
                  &:nth-child(2) {
                    /* remove unusing full screen border */
                    display: none;
                  }
                  > div {
                    will-change: initial !important;
                    transform: initial !important;
                    > div {
                      transform: initial !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
      /* } */
    `}
  ${props =>
    props.scrollSmooth &&
    css`
      body {
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch !important;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    `}

`

// Define type of property
interface Props {
  removeCursor: boolean
  removeScaleDown: boolean
  overflowScroll: boolean
  enableFixed: boolean
  scrollSmooth: boolean
  frameWidth: string
}

export class RemoveFramerXStyles extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    width: 50,
    height: 50,
    removeCursor: true,
    removeScaleDown: false,
    overflowScroll: false,
    enableFixed: false,
    scrollSmooth: true,
    frameWidth: '187.5',
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    removeCursor: {
      type: ControlType.Boolean,
      title: 'Remove Cursor',
    },

    removeScaleDown: {
      type: ControlType.Boolean,
      title: 'Remove Scale Down',
    },
    overflowScroll: {
      type: ControlType.Boolean,
      title: 'Overflow Scroll',
    },
    enableFixed: {
      type: ControlType.Boolean,
      title: 'Enable Child Fixed',
    },
    scrollSmooth: {
      type: ControlType.Boolean,
      title: 'Scroll Smooth',
    },

    frameWidth: {
      type: ControlType.String,
      title: 'Frame Width',
    },
  }

  render() {
    return (
      <GlobalStyle
        removeCursor={this.props.removeCursor}
        removeScaleDown={this.props.removeScaleDown}
        overflowScroll={this.props.overflowScroll}
        enableFixed={this.props.enableFixed}
        scrollSmooth={this.props.scrollSmooth}
        frameWidth={this.props.frameWidth}
      />
    )
  }
}
