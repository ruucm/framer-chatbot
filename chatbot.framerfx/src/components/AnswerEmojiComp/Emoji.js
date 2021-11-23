import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { url } from 'framer/resource'
import { Frame, useAnimation } from 'framer'
import { sleep } from '../../shared/utils'
import { handleAnswerClick } from '../../handlers'
import { withContentRect } from 'react-measure'
import { answer } from '../../datas'

const Img = styled(Frame)`
  width: 51px !important;
  height: 51px !important;
  background-color: transparent !important;
  cursor: pointer;
`

const Emoji = ({
  // from parent
  choiceOrder,
  type,
  clicked,
  setClicked,
  isBase,

  // react-measure
  measureRef,
  measure,
  contentRect,
  ...props
}) => {
  var source = url('../images/emoji-' + type + '.png')
  const anim = useAnimation()

  const throwAnim = () => {
    return new Promise(async resolve => {
      // calculate of left, bottom target point
      var target = document.querySelectorAll('.chat')

      if (target.length > 2) {
        let lastChat = target[target.length - 1]
        var lastChatRect = lastChat.getBoundingClientRect()

        var leftMove =
          window.innerWidth -
          (contentRect.bounds.left + contentRect.bounds.width) - // use left value, cause right pin is at weird position on Framer Beta
          15.5 - // minus right padding
          2 + //minus increased height?
          -1 // cause emoji not gonna scale like multipe

        var topMove = -(contentRect.bounds.top - lastChatRect.bottom - 163) // minus something..

        await anim.start({
          left: leftMove,
          top: topMove,
          transition: {
            duration: 0.83 / 2, // make x2 speed
            ease: 'easeInOut',
          },
        })
      }

      resolve()
      setClicked({
        key: choiceOrder,
        animating: false,
      })
    })
  }
  const handleClicked = async () => {
    // clicked anim
    await anim.start({
      opacity: 0.3,
      transition: {
        duration: 0.7,
        ease: 'easeIn',
      },
    })
    await anim.start({
      opacity: 1,
      transition: {
        duration: 0.34,
        ease: 'easeInOut',
      },
    })

    // throw emoji
    await throwAnim()

    await sleep(0.5) // sleep for anwserEndAnim

    handleAnswerClick(choiceOrder, url('../images/emoji-' + type + '.png'))
  }
  const fadeAnim = async () => {
    await sleep(0.37)
    await anim.start({
      opacity: 0.3,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    })

    await sleep(3)

    anim.start({
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    })
  }

  const answerEndAnim = async () => {
    if (isBase || clicked.key != choiceOrder)
      await anim.start({
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: 'linear',
        },
      })
    answer.clicking = false
  }

  // check states for animations
  if (clicked.key == -1) {
    anim.start({
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.33,
        ease: 'easeInOut',
        delay: 0.03 * choiceOrder,
      },
    })
  } else {
    if (clicked.animating) {
      if (clicked.key == choiceOrder) {
        log('clickedAnim! - ', choiceOrder)
        if (!isBase) handleClicked()
        else fadeAnim()
      } else if (clicked.key != choiceOrder) {
        log('fadeAnim! - ', choiceOrder)
        fadeAnim()
      }
    } else if (!clicked.animating) {
      log('answerEndAnim!!')
      answerEndAnim()
    }
  }

  return (
    <Img
      ref={measureRef}
      onTap={() => {
        if (!answer.clicking) {
          answer.clicking = true
          log('clicked', clicked)
          setClicked({
            key: choiceOrder,
            animating: true,
          })
        }
      }}
      image={source}
      active={clicked.key == -1 || clicked.key == choiceOrder}
      initial={{
        opacity: 0.3,
        top: 163,
      }}
      animate={anim}
    />
  )
}

export default withContentRect('bounds')(Emoji)
