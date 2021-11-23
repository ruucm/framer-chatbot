import * as React from 'react'
import { Frame, useAnimation } from 'framer'

export function Cursor() {
  const anim = useAnimation()
  const cursorWidth = 90
  const strokeWidth = 95

  var animating = false

  const cursorAnim = async event => {
    if (event.pageX && event.pageY && !animating) {
      animating = true
      // move position
      anim.start({
        top: event.pageY - cursorWidth / 2,
        left: event.pageX - cursorWidth / 2,
        transition: {
          duration: 0,
        },
      })

      // animate scale
      anim.start({
        scale: 0.55,
        transition: {
          duration: 0.54,
        },
      })

      // animate strokes
      await anim.start({
        boxShadow:
          '0 0 0 0px rgba(255, 255, 255, 1), 7px 7px 23px 0px rgba(0, 0, 0, 0.12)',
        borderWidth: 0,
        transition: {
          duration: 0.54,
          delay: 0.23,
        },
      })

      // init values
      await anim.start({
        scale: 0,
        boxShadow:
          '0 0 0 ' +
          strokeWidth / 2 +
          'px rgba(255, 255, 255, 1), 7px 7px 23px 0px rgba(0, 0, 0, 0.12)',
        borderWidth: strokeWidth / 2,
        transition: {
          duration: 0,
        },
      })

      animating = false
    }
  }

  // for mobile touch
  document.addEventListener('touchstart', event => {
    log('event', event)
    cursorAnim(event)
  })

  // for desktop click
  document.addEventListener(
    'click',
    event => {
      // log('event - (click)', event)
      cursorAnim(event)
    },
    false
  )

  return (
    <Frame
      initial={{
        scale: 0,
      }}
      animate={anim}
      size={cursorWidth}
      background="transparent"
      radius={100}
      // use border as inline stroke
      border={strokeWidth / 2 + 'px solid white'}
      style={{
        // use shadow as outline stroke
        boxShadow:
          '0 0 0 ' +
          strokeWidth / 2 +
          'px rgba(255, 255, 255, 1), 7px 7px 23px 0px rgba(0, 0, 0, 0.12)',
      }}
    />
  )
}
