import { answer, chats } from '../datas'
import {
  addChat,
  setAnswers,
  showNextQuestion,
  showSubQuestion,
} from '../handlers'
import { chatInterval } from '../shared/consts'
import { sleep, scrollToLastChat } from '../shared/utils'

const handler = async (choiceOrder, answerImage) => {
  log('handleAnswerClick')
  var choices = answer.currentQuestion.choices

  // 1. save answer
  setAnswers(
    answer.currentQuestion.id,
    typeof choiceOrder == 'string' ? choiceOrder : null,
    choices.length ? choices[choiceOrder].id : null,
    choices.length ? choices[choiceOrder].score : null
  )

  // 2. add answer to chat.list
  var newChat
  if (answerImage || (choices.length && choices[choiceOrder].koDescription))
    // use contents of currentQuestion
    newChat = {
      image: answerImage,
      koDescription: answerImage ? '' : choices[choiceOrder].koDescription, // if this chat has answerImage, don't add koDescription
      answerType: answer.currentQuestion.answerType,
    }
  // if there is no contents in currentQuestion
  else
    newChat = {
      image: null,
      koDescription: choiceOrder,
      answerType: answer.currentQuestion.answerType,
    }
  addChat(newChat)
  log('addChat! - handleAnswerClick')

  // 3. Hide Current Answer Type
  answer.type = 'Temp'

  // 4. check it has subquestion of choices
  var subquestion = choices.length ? choices[choiceOrder].subquestion : null

  if (subquestion > 0) {
    // 4-1. show subquestions
    showSubQuestion(subquestion)
  } else {
    // 4-2. show next
    showNextQuestion(answer.currentOrder)
  }
}

export default handler
