import React from 'react'
import { Frame, animate, Animatable, useAnimation } from 'framer'
import styled, { css } from 'styled-components'
import { Content, Text, Img } from './'
import { delayBeforeNewQuestion, powerEaseInOut } from '../../shared/consts'

const BubbleFrame = styled(Frame)`
  width: initial !important;
  height: initial !important;
  position: relative !important;
  background: transparent !important;

  text-align: right;


  ${props =>
    props.isImg &&
    css`
      ${Content} {
        padding: 0;
      }
    `}

      
  /* Only Question Styles */
  ${props =>
    props.questionType &&
    css`
      text-align: left;

      ${Content} {
        background: #ebebeb !important;
        border-radius: 15.25px 15.25px 15.25px 5px;
        max-width: ${549 / 2}px;
      }
      ${Text} {
        color: #292929;
        text-align: left !important;
        line-height: 18.25px;
      }
    `}

    ${props =>
      props.questionType &&
      props.isImg &&
      css`
        ${Content} {
          /* fix height of Img, cause it makes weird scroll */
          height: 100px;
          background: transparent !important;
        }
      `}

 
  /* Only Answer Styles */
  ${props =>
    props.answerType == 'Multiple Choice' &&
    !props.questionType &&
    css`
      ${Text} {
        white-space: nowrap;
      }
    `}

    ${props =>
      props.answerType == 'Emoji Rating' &&
      !props.questionType &&
      css`
        ${Content} {
          background: transparent !important;
          padding: 0;
          height: 51px !important;
        }

        ${Img} {
          min-width: 100%;
          min-height: 100%;
        }
      `}

  ${props =>
    props.answerType == 'Star Rating' &&
    !props.questionType &&
    css`
      ${Content} {
        /* background: linear-gradient(
          92deg,
          #fd8d58,
          #fd5664 50%,
          #e35289
        ) !important; */
        width: 115px;
        height: 30px;
      }

      ${Img} {
        width: 100%;
        padding: 0;
        object-fit: contain;
      }
    `}

  ${props =>
    props.answerType == 'Comment' &&
    !props.questionType &&
    css`
      ${Text} {
        text-align: left !important;
      }
    `}


`

const Bubble = ({ questionType, answerType, isImg, children, ...props }) => {
  const questionInitial = {
    scale: 0,
  }
  const answerInitial = {
    scale: 1,
  }
  return (
    <BubbleFrame
      initial={questionType ? questionInitial : answerInitial}
      animate={{
        scale: 1,
      }}
      originX={0}
      originY={1}
      transition={{
        scale: { duration: 0.33, ease: powerEaseInOut },
        delay: delayBeforeNewQuestion,
      }}
      questionType={questionType}
      answerType={answerType}
      isImg={isImg}
      className={'chat'} // for auto scrolling
    >
      {children}
    </BubbleFrame>
  )
}

export default Bubble
