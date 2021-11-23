import React, { useState, useEffect } from 'react'
import { Frame, useAnimation } from 'framer'
import { url } from 'framer/resource'
import { sleep } from '../../shared/utils'
import { delayBeforeNewQuestion } from '../../shared/consts'

const Lychee = () => {
  const anim = useAnimation()
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    async function startLycheeAnim() {
      await sleep(delayBeforeNewQuestion)
      await anim.start({
        scale: 1.193,
        transition: {
          duration: 0.16,
          ease: 'easeInOut',
        },
      })
      anim.start({
        scale: 1,
        transition: {
          duration: 0.14,
          ease: 'easeInOut',
        },
      })
    }
    if (!revealed) {
      startLycheeAnim()
      setRevealed(true)
    }
  })
  return (
    <Frame
      // width={26.5}
      // height={25.5} <- .5 crops image after animation
      width={27}
      height={26}
      left={-36}
      style={{
        background:
          'center / contain no-repeat url("' +
          url('../images/lychee.png') +
          '")',
      }}
      initial={{ scale: 0 }}
      animate={anim}
    />
  )
}

export default Lychee
