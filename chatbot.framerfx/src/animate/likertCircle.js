import { likert } from '../datas'
import { sleep } from '../shared/utils'

const animFix = 1 / 2

const animate = i => {
  return new Promise(async resolve => {
    const animateLarge = async (i, to, transition) => {
      likert.largeScaleTransition = transition
      likert.largeScale[i] = to
    }
    const animatingLarge = async () => {
      // LikertCircleLarge
      animateLarge(i, 0.933, {
        duration: 0.57 * animFix,
        ease: 'easeIn',
      })
      await sleep(0.57 * animFix)

      animateLarge(i, 0.68, {
        duration: 0.97 * animFix,
        ease: 'easeInOut',
      })
      await sleep((0.97 + 0.1) * animFix)

      animateLarge(i, 0.933, {
        duration: 0.6 * animFix,
        ease: 'linear',
      })
      await sleep(0.6 * animFix)

      animateLarge(i, 0.68, {
        duration: 0.97 * animFix,
        ease: 'easeInOut',
      })
      await sleep(0.97 * animFix)
    }
    const animateMedium = async (i, to, transition) => {
      likert.mediumScaleTransition = transition
      likert.mediumScale[i] = to
    }
    const animatingMedium = async () => {
      // LikertCircleMedium
      animateMedium(i, 0.84, {
        duration: 0.53 * animFix,
        ease: 'easeIn',
      })
      await sleep(0.53 * animFix)

      animateMedium(i, 0.612, {
        duration: 0.64 * animFix,
        ease: 'easeInOut',
      })
      await sleep((0.64 + 0.16) * animFix)

      animateMedium(i, 0.84, {
        duration: 0.34 * animFix,
        ease: 'linear',
      })
      await sleep(0.34 * animFix)

      animateMedium(i, 0.612, {
        duration: 0.33 * animFix,
        ease: 'easeInOut',
      })
      await sleep(0.33 * animFix)
    }
    const animateSmall = async (i, to, transition) => {
      likert.smallScaleTransition = transition
      likert.smallScale[i] = to
    }
    const animatingSmall = async () => {
      // LikertCircleSmall
      animateSmall(i, 0.7, {
        duration: 0.43 * animFix,
        ease: 'easeIn',
      })
      await sleep(0.43 * animFix)

      animateSmall(i, 0.509, {
        duration: 0.26 * animFix,
        ease: 'easeIn',
      })
      await sleep(0.26 * animFix)

      animateSmall(i, 0.4, {
        duration: 0.48 * animFix,
        ease: 'linear',
      })
      await sleep(0.48 * animFix)

      animateSmall(i, 0.7, {
        duration: 0.77 * animFix,
        ease: 'easeIn',
      })
      await sleep(0.77 * animFix)

      animateSmall(i, 0.51, {
        duration: 0.42 * animFix,
        ease: 'easeIn',
      })
      await sleep(0.42 * animFix)
    }

    animatingLarge()
    animatingMedium()
    animatingSmall()

    // wait until animatingLarge end
    await sleep(3.11 * animFix)

    // init values
    animateLarge(i, 0, {
      duration: 0,
    })
    animateMedium(i, 0, {
      duration: 0,
    })
    animateSmall(i, 0, {
      duration: 0,
    })

    resolve()
  })
}

export default animate
