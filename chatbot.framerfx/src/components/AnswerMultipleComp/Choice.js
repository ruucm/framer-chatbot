import React, { useState } from 'react'
import { Frame, animate, Animatable, useAnimation } from 'framer'
import styled, { css } from 'styled-components'
import { sleep } from '../../shared/utils'
import { powerEaseInOut, baseDuration } from '../../shared/consts'
import { handleAnswerClick } from '../../handlers'

const ChoiceFrame = styled(Frame)`
  z-index: -1;
  background: transparent !important;
`
const Text = styled.div`
  line-height: 35px;
  border-radius: 35px;

  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;
  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;
  box-shadow: inset 0px 0px 0px 1.5px #fd5863;

  font-family: Spoqa Han Sans;
  font-size: 13.5px;
  font-weight: bold;
  letter-spacing: 0.205px;
  color: #292929;
  padding: 0 12px;
  display: inline-block;
  white-space: nowrap;
`

const Choice = ({ type, choice, choiceOrder, clicked, ...props }) => {
  const anim = useAnimation()

  const clickedAnim = async () => {
    anim.start({
      opacity: 0.3,
      transition: {
        duration: 0.34,
        ease: 'linear',
      },
    })
  }

  const answerEndAnim = async () => {
    log('answerEndAnim', choiceOrder)
    await anim.start({
      opacity: 0.3,
      transition: {
        duration: 0.34,
        ease: 'linear',
      },
    })
  }

  if (clicked.key == -1) {
    anim.start({
      opacity: 1,
      transition: {
        opacity: {
          duration: baseDuration,
          ease: 'linear',
        },
        delay: 0.33 + 0.77,
      },
    })
  } else if (clicked.key == choiceOrder)
    // fade only clicked
    clickedAnim()
  else if (!clicked.animating)
    // make end of answer anim
    answerEndAnim()

  return choice ? (
    <ChoiceFrame
      width="initial"
      height="initial"
      position="relative"
      initial={{
        opacity: 0,
      }}
      animate={anim}
    >
      <Text type={type}>{choice.koDescription}</Text>
    </ChoiceFrame>
  ) : (
    ''
  )
}

export default Choice
