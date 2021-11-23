import React, { useState } from 'react'
import { Frame, animate, Animatable, useAnimation } from 'framer'
import styled, { css } from 'styled-components'
import { sleep } from '../../shared/utils'
import { setAnswers, showNextQuestion, handleAnswerClick } from '../../handlers'
import { likert, answer } from '../../datas'
import { likertCircle } from '../../animate'
import { muitipleBaseDuration, clicking } from '../../shared/consts'
import { withContentRect } from 'react-measure'

var wrapTransformTime = 0.05

const WrapFrame = styled(Frame)`
  width: 100% !important;
  height: 35px !important;
  background: transparent !important;
  overflow: hidden;
  border-radius: 35px;
  /* -webkit-mask-image: -webkit-radial-gradient(white, black); */
  transition: ${wrapTransformTime}s height ease,
    ${wrapTransformTime}s border-radius ease !important;
  ${props =>
    props.clicked.key >= 0 &&
    css`
      height: 37px !important;
      border-radius: 0;
    `}
`
const CoverFrame = styled(Frame)`
  display: inline-block;
  background: #fd5863 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 1;
  overflow: hidden;
  border-radius: 35px;

  transition: ${wrapTransformTime}s border-radius ease !important;
  ${props =>
    props.clicked.key >= 0 &&
    css`
      border-radius: 15.25px 15.25px 5px 15.25px;
    `}
`

const BGGrdient = styled(Frame)`
  background: linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%);
  width: 100% !important;
  height: 100% !important;
  transition: ${wrapTransformTime}s opacity ease !important;
  ${props =>
    props.clicked.key >= 0 &&
    css`
      opacity: 0;
    `}
`

const TextFrame = styled(Frame)`
  width: 100% !important;
  height: 100% !important;
  background: transparent !important;

  z-index: 1;
  cursor: pointer;

  color: #ffffff;
  font-family: Spoqa Han Sans !important;
  font-size: 13.5px;
  font-weight: bold;
  letter-spacing: 0.205px;
`

const ChoiceCover = ({
  // from parent
  choice,
  choiceOrder,
  type,
  clicked,
  setClicked,

  // react-measure
  measureRef,
  measure,
  contentRect,

  ...props
}) => {
  const wrapAnim = useAnimation()
  const coverAnim = useAnimation()
  const coverTextAnim = useAnimation()
  // const [clicked, setClicked] = useState(false)

  const throwAnim = () => {
    return new Promise(async resolve => {
      // make same style of wrap as target bubble using css
      setClicked({
        key: choiceOrder,
        animating: true,
      })

      // calculate of left, bottom target point
      var target = document.querySelectorAll('.chat')

      if (target.length >= 1) {
        let lastChat = target[target.length - 1]
        var lastChatRect = lastChat.getBoundingClientRect()

        var leftMove =
          window.innerWidth -
          (contentRect.bounds.left + contentRect.bounds.width) - // use left value, cause right pin is at weird position on Framer Beta
          15.5 - // minus right padding
          2 //minus increased height?
        var bottomMove = contentRect.bounds.bottom - lastChatRect.bottom - 2 //minus increased height

        if (type == 'multiple') bottomMove -= 88 // minus initial of top anim

        wrapAnim.start({
          left: leftMove,
          bottom: bottomMove,
          transition: {
            duration: muitipleBaseDuration,
            ease: 'easeInOut',
          },
        })

        await wrapAnim.start({
          scale: 1.19,
          transition: {
            duration: muitipleBaseDuration / 3,
            ease: 'easeOut',
          },
        })

        await wrapAnim.start({
          scale: 1,
          transition: {
            duration: (muitipleBaseDuration / 3) * 2,
            ease: 'easeIn',
          },
        })
        log('resolve!!')
        resolve()
        setClicked({
          key: choiceOrder,
          animating: false,
        })
      }
    })
  }

  return (
    <div ref={measureRef}>
      {contentRect.bounds.width ? (
        <WrapFrame animate={wrapAnim} clicked={clicked}>
          <CoverFrame
            initial={{
              left: type == 'likert' ? 0 : -(contentRect.bounds.width + 30), // Add 30px To fix galaxy issue
              scale: type == 'likert' ? 0 : 1,
            }}
            animate={coverAnim}
            clicked={clicked}
          >
            <BGGrdient clicked={clicked} />
          </CoverFrame>
          <TextFrame
            initial={{
              opacity: 0,
            }}
            animate={coverTextAnim}
            onTap={async e => {
              log('onTap! - AnswerMultipleComp')
              log('contentRect.bounds.width', contentRect.bounds.width)

              if (!answer.clicking) {
                answer.clicking = true
                if (type == 'likert') {
                  await likertCircle(choiceOrder)

                  // scale anim
                  coverAnim.start({
                    scale: 1,
                    transition: {
                      duration: muitipleBaseDuration,
                      ease: 'easeInOut',
                    },
                  })

                  await throwAnim()

                  // show Text
                  await coverTextAnim.start({
                    opacity: 1,
                    transition: {
                      duration: 0.42,
                      ease: 'easeInOut',
                    },
                  })

                  // answerEndAnim
                  likert.transition = {
                    duration: 0.54,
                    ease: 'linear',
                  }
                  likert.opacity = 0
                  likert.descTransition = {
                    duration: 0.54,
                    ease: 'linear',
                  }
                  likert.descOpacity = 0
                  await sleep(0.54)

                  // init value
                  likert.top = 124
                  likert.opacity = 1
                  likert.descOpacity = 1
                } else if (type == 'multiple') {
                  // show Cover
                  coverAnim.start({
                    left: 0,
                    transition: {
                      duration: 0.42,
                      ease: 'linear',
                    },
                  })

                  // show Text
                  await coverTextAnim.start({
                    opacity: 1,
                    transition: {
                      duration: 0.42,
                      ease: 'easeInOut',
                    },
                  })

                  await throwAnim()

                  await sleep(0.34) // sleep for anwserEndAnim
                }
                handleAnswerClick(choiceOrder, null)
                answer.clicking = false
              }
            }}
          >
            {choice.koDescription}
          </TextFrame>
        </WrapFrame>
      ) : (
        ''
      )}
    </div>
  )
}

export default withContentRect('bounds')(ChoiceCover)
