import { Data } from 'framer'
import { url } from 'framer/resource'

const optionTop = [0, 0, 0, 0, 0]

const optionOpacity = [1, 1, 1, 1, 1]
const optionOpacityTransition = {
  ease: 'linear',
}
const optionScale = [1, 1, 1, 1, 1]
const optionScaleTransition = {
  duration: 0.2,
}

const optionBaseOpacity = [1, 1, 1, 1, 1]

const optionImg = [
  'center / contain no-repeat url(' + url('../images/start-default.png') + ')',
  'center / contain no-repeat url(' + url('../images/start-default.png') + ')',
  'center / contain no-repeat url(' + url('../images/start-default.png') + ')',
  'center / contain no-repeat url(' + url('../images/start-default.png') + ')',
  'center / contain no-repeat url(' + url('../images/start-default.png') + ')',
]

const resultBG = [
  'center / contain no-repeat url(' +
    url('../images/start-answer-0.png') +
    '), #FD5863',
  'center / contain no-repeat url(' +
    url('../images/start-answer-1.png') +
    '), #FD5863',
  'center / contain no-repeat url(' +
    url('../images/start-answer-2.png') +
    '), #FD5863',
  'center / contain no-repeat url(' +
    url('../images/start-answer-3.png') +
    '), #FD5863',
  'center / contain no-repeat url(' +
    url('../images/start-answer-4.png') +
    '), #FD5863',
]

const resultWidth = [298, 298, 298, 298, 215]
const resultOpacity = [0, 0, 0, 0, 0]
const resultBottom = [21, 21, 21, 21, 21]
const resultRight = [-32, -32, -32, -32, -32]

export default Data({
  optionTop,
  optionOpacity,
  optionOpacityTransition,
  optionBaseOpacity,
  optionImg,
  optionScale,
  optionScaleTransition,
  resultBG,
  resultWidth,
  resultOpacity,
  resultBottom,
  resultRight,
})
