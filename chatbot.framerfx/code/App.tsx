import { Override } from 'framer'
import { url } from 'framer/resource'
import {
  chats,
  answer,
  likert,
  starRating,
  slider,
  multiple,
  company,
} from './datas'
import { initDataLoad, handleAnswerClick } from './handlers'
import { isProd, defaultDuration, baseDuration } from './shared/consts'
import { isMobile, sleep, closeWindow } from './shared/utils'

var dataLoaded = false
export const Main: Override = props => {
  window.log = isProd ? () => void 0 : console.log
  // Init DataLoad Once
  if (!dataLoaded) {
    dataLoaded = true
    initDataLoad()
  }

  return {}
}

/**
 * CompanyInfo
 */

export const CompanyInfo: Override = props => {
  return {
    visible: company.visible,
    style: {
      cursor: 'pointer',
    },
  }
}
export const CompanyLogo: Override = props => {
  return {
    background: company.logo,
  }
}
export const CompanyName: Override = props => {
  return {
    text: company.name,
    width: 171,
  }
}
export const CompanySector: Override = props => {
  return {
    text: company.sector,
    width: 171,
  }
}
export const CompanyInfoButton: Override = props => {
  return {
    style: {
      cursor: 'pointer',
    },
    onTap() {
      company.visible = true
    },
  }
}
export const Overlay: Override = props => {
  return {
    visible: company.visible,
    onTap() {
      company.visible = false
    },
  }
}

export const ChatList: Override = props => {
  return {
    chatList: chats.list,
    answerResult: answer.result,
  }
}

/**
 * Answer Types
 */
export const AnswerTypes: Override = props => {
  return {
    style: {
      // add border inside without moving child
      boxShadow:
        'inset -2.5px 0px 0px 0px #ebebeb, inset 2.5px 0px 0px 0px #ebebeb',
    },
  }
}

export const AnswerEmoji: Override = props => {
  return {
    visible: answer.type == 'Emoji Rating',
    currentQuestion: answer.currentQuestion,
  }
}

// Likert
export const AnswerLikert: Override = props => {
  return {
    visible: answer.type == 'Likert',
    currentQuestion: answer.currentQuestion,
  }
}
export const Likert: Override = props => {
  return {
    initial: {
      top: 124 + 44,
      opacity: 0,
    },
    animate: {
      top: likert.top,
      opacity: likert.opacity,
    },
    transition: likert.transition,
  }
}

export const LikertCircleLarge: Override = props => {
  let i = props.children[0].props.children[0].props.currentIndex

  return {
    style: {
      background: 'linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289)',
    },
    initial: {
      scale: 0,
    },
    animate: {
      scale: likert.largeScale[i],
    },
    transition: {
      scale: likert.largeScaleTransition,
    },
  }
}

export const LikertCircleMedium: Override = props => {
  let i = props.children[0].props.children[0].props.currentIndex
  return {
    style: {
      background: 'linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289)',
    },
    initial: {
      scale: 0,
    },
    animate: {
      scale: likert.mediumScale[i],
    },
    transition: {
      scale: likert.mediumScaleTransition,
    },
  }
}

export const LikertCircleSmall: Override = props => {
  let i = props.children[0].props.children[0].props.currentIndex
  return {
    style: {
      background: 'linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289)',
    },
    initial: {
      scale: 0,
    },
    animate: {
      scale: likert.smallScale[i],
    },
    transition: {
      scale: likert.smallScaleTransition,
    },
  }
}
export const LikertDesc: Override = props => {
  return {
    hey: likert.descOpacity, // to force reload
  }
}

// Star Rating
export const AnswerStarRating: Override = props => {
  return {
    visible: answer.type == 'Star Rating',
  }
}

export const StarOption: Override = props => {
  let i = props.children[0].props.children[0].props.currentIndex

  const animateScale = async (i, to, transition) => {
    starRating.optionScaleTransition = transition
    starRating.optionScale[i] = to
  }
  const animateSelectedScale = async i => {
    animateScale(i, 0.703, {
      duration: 0.24,
      ease: 'easeInOut',
    })
    await sleep(0.24)

    animateScale(i, 1.3, {
      duration: 0.1,
      ease: 'easeInOut',
    })
    await sleep(0.1)

    animateScale(i, 1, {
      duration: 0.26,
      ease: 'easeInOut',
    })
    await sleep(0.26)

    animateScale(i, 1.3, {
      duration: 0.17,
      ease: 'easeInOut',
    })
    await sleep(0.17)

    animateScale(i, 1.3, {
      duration: 0.2,
      ease: 'easeInOut',
    })
    await sleep(0.2)
  }

  const animateOthersScale = async i => {
    animateScale(i, 0.8, {
      duration: 0.34,
      ease: 'easeInOut',
    })
    await sleep(0.34)

    animateScale(i, 1, {
      duration: 0.34,
      ease: 'easeInOut',
    })
    await sleep(0.34)
  }

  const initStars = async () => {
    for (let i = 0; i < 5; i++) {
      // reset animation
      starRating.optionScale[i] = 1
      starRating.optionOpacity[i] = 1
      starRating.optionTop[i] = 0

      starRating.optionBaseOpacity[i] = 1

      // reset selected result postion
      starRating.resultOpacity[i] = 0
      starRating.resultWidth[i] = 298
      starRating.resultBottom[i] = 21
      starRating.resultRight[i] = -32
    }

    // reset star backgrounds (images)
    starRating.optionImg = [
      'center / contain no-repeat url(' +
        url('../images/start-default.png') +
        ')',
      'center / contain no-repeat url(' +
        url('../images/start-default.png') +
        ')',
      'center / contain no-repeat url(' +
        url('../images/start-default.png') +
        ')',
      'center / contain no-repeat url(' +
        url('../images/start-default.png') +
        ')',
      'center / contain no-repeat url(' +
        url('../images/start-default.png') +
        ')',
    ]
  }

  return {
    initial: {
      top: 44,
      opacity: 0,
    },
    animate: {
      top: starRating.optionTop[i],
      opacity: starRating.optionOpacity[i],
      scale: starRating.optionScale[i],
    },
    transition: {
      duration: 0.47,
      scale: starRating.optionScaleTransition,
      delay: i * 0.04,
      opacity: starRating.optionOpacityTransition,
      top: {
        ease: 'easeInOut',
      },
    },

    background: starRating.optionImg[i],
    style: {
      cursor: 'pointer',
    },
    async onTap() {
      if (!answer.clicking) {
        answer.clicking = true
        log('onTap! - i', i)

        // animate clicked star
        animateSelectedScale(i)

        // fill selected stars
        var newOptionImgs = []
        for (let j = 0; j < 5; j++) {
          if (j <= i) {
            animateOthersScale(j)
            newOptionImgs.push(
              'center / contain no-repeat url(' +
                url('../images/start-active-' + j + '.png') +
                ')'
            )
          }
        }
        starRating.optionImg = newOptionImgs

        // hide fills
        await sleep(0.73)
        starRating.optionOpacityTransition = {
          duration: 0.3,
          ease: 'linear',
        }
        // for (let k = 0; k < 5; k++) {
        //   if (k < i) {
        //     starRating.optionOpacity[k] = 0
        //   }
        // }
        await sleep(0.2)
        // starRating.optionOpacity[i] = 0
        for (let k = 0; k < 5; k++) starRating.optionOpacity[k] = 0

        // last spring anim
        await sleep(0.27)
        animateScale(i, 0.8, {
          duration: 0.34,
          ease: 'easeInOut',
        })
        for (let l = 0; l < 5; l++) {
          if (l < i) {
            animateScale(l, 0.8, {
              duration: 0.34,
              ease: 'easeInOut',
            })
          }
        }
        await sleep(0.34)

        for (let p = 0; p < 5; p++) {
          if (p <= i) {
            animateScale(p, 1, {
              duration: 0.37,
              ease: 'easeInOut',
            })
          }
        }

        // show resultBG
        var target = document.querySelectorAll('.chat')

        if (target.length > 2) {
          // calculate of left, bottom target point
          let lastChat = target[target.length - 1]
          var lastChatRect = lastChat.getBoundingClientRect()
          // var pad = (window.innerWidth * 0.09) / 2
          var pad = (window.innerWidth - 326) / 2
          // var gutter = (window.innerWidth * 0.91 - 52 * 5) / 4
          var gutter = (326 - 52 * 5) / 4
          var rightMove =
            (4 - i) * (52 + gutter) +
            pad -
            15.5 - // minus padding
            3 // ?
          var bottomMove =
            window.innerHeight -
            lastChatRect.bottom -
            139 - // minus distance from bottom
            12 - // add last chat bottom-margin
            15 - // add result height
            3.5 // ?

          starRating.resultOpacity[i] = 1
          starRating.resultWidth[i] = 115
          starRating.resultBottom[i] += bottomMove
          starRating.resultRight[i] = -rightMove
        }

        await sleep(2)

        // answerEndAnim
        starRating.optionOpacityTransition = {
          duration: 0.5,
          ease: 'linear',
        }
        for (let k = 0; k < 5; k++) {
          starRating.optionBaseOpacity[k] = 0
        }
        await sleep(0.5)

        // Init Animation
        initStars()

        handleAnswerClick(i, url('../images/start-answer-' + i + '.png'))
        answer.clicking = false
      }
    },
  }
}

export const StarOptionsBase: Override = props => {
  let i = props.children[0].props.children[0].props.currentIndex

  return {
    initial: {
      top: 44,
      opacity: 0,
    },
    animate: {
      top: starRating.optionTop[i],
      opacity: starRating.optionBaseOpacity[i],
      scale: starRating.optionScale[i],
    },
    transition: {
      duration: 0.47,
      scale: starRating.optionScaleTransition,
      opacity: starRating.optionOpacityTransition,
      delay: i * 0.04,
      top: {
        ease: 'easeInOut',
      },
    },
    background:
      'center / contain no-repeat url(' +
      url('../images/start-default.png') +
      ')',
  }
}

export const StarOptionResult: Override = props => {
  let i = props.children[0].props.children[0].props.currentIndex

  return {
    background: starRating.resultBG[i],
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: starRating.resultOpacity[i],
      width: starRating.resultWidth[i],
      right: starRating.resultRight[i],
      bottom: starRating.resultBottom[i],
    },
    transition: {
      opacity: {
        duration: baseDuration,
        ease: 'easeInOut',
      },
      width: {
        duration: baseDuration - 0.2,
        ease: 'linear',
      },

      right: {
        duration: baseDuration,
        ease: 'easeInOut',
      },
      bottom: {
        duration: baseDuration,
        ease: 'easeInOut',
      },
    },
  }
}

// Multiple
export const AnswerMultiple: Override = props => {
  return {
    visible: answer.type == 'Multiple Choice',
    currentQuestion: answer.currentQuestion, // for reload components when answer.currentQuestion changed
    coverTextVisible: multiple.coverTextVisible, // for reload components when multiple.coverTextVisible changed
  }
}

// Slider
var optionValue = 0
export const AnswerSlider: Override = props => {
  return {
    visible: answer.type == 'Slider',
  }
}

export const Slider: Override = props => {
  var max = answer.currentQuestion.choices.length - 1
  return {
    value: 0,
    max: max,
    onValueChange(value) {
      optionValue = value
    },
    async confirm() {
      if (!answer.clicking) {
        answer.clicking = true
        await sleep(1) // wait for cursor anim end
        handleAnswerClick(parseInt(optionValue + 0.05 * max), null)
        answer.clicking = false
      }
    },
  }
}

export const SliderDescLeft: Override = () => {
  return {
    text: answer.currentQuestion.choices[0].koDescription,
    className: 'slider-desc',
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration: 0.54,
      ease: 'linear',
    },
  }
}

export const SliderDescRight: Override = () => {
  var choiceLength = answer.currentQuestion.choices.length
  return {
    text: answer.currentQuestion.choices[choiceLength - 1].koDescription,
    className: 'slider-desc',
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration: 0.54,
      ease: 'linear',
    },
  }
}

// AnswerComment
export const AnswerComment: Override = props => {
  return {
    visible: answer.type == 'Comment',
  }
}
