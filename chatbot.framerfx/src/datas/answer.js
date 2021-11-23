import { Animatable, Data } from 'framer'

const type = null
// 'None', "Emoji Rating", "Likert", "Star Rating", "Slider", "Comment"
const currentOrder = 0
const currentQuestion = null
const currentQuestionDepth = 0
const subQuestions = null
const subQuestionOrder = 0
const result = []
const clicking = false

export default Data({
  type,
  currentOrder,
  currentQuestion,
  currentQuestionDepth,
  subQuestions,
  subQuestionOrder,
  result,
  clicking,
})
