import { Animatable, Data } from 'framer'
import { url } from 'framer/resource'

const optionValue = null
const knobSize = Animatable(30)
const tint = Animatable('blue')

export default Data({
  optionValue,
  knobSize,
  tint,
})
