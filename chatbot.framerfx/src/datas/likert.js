import { Data } from 'framer'

const top = 124
const opacity = 1
const transition = {
  duration: 0.34,
  ease: 'easeInOut',
}

const descOpacity = 1
const descTransition = {
  duration: 0.33,
  delay: 0.14,
  ease: 'easeInOut',
}

const largeScale = [0, 0, 0, 0, 0]
const largeScaleTransition = {
  duration: 0,
}

const mediumScale = [0, 0, 0, 0, 0]
const mediumScaleTransition = {
  duration: 0,
}

const smallScale = [0, 0, 0, 0, 0]
const smallScaleTransition = {
  duration: 0,
}

export default Data({
  top,
  opacity,
  transition,
  descOpacity,
  descTransition,

  largeScale,
  largeScaleTransition,
  mediumScale,
  mediumScaleTransition,
  smallScale,
  smallScaleTransition,
})
