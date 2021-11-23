import { answer, chats } from '../datas'
import { sleep, scrollToLastChat } from '../shared/utils'
import { chatInterval, delayBeforeNewAnswerType } from '../shared/consts'
import { addChat, termination } from '../handlers'

const handler = async before => {
  var next = before + 1
  answer.currentOrder = next
  answer.currentQuestionDepth = 0

  // 1. go loop until found proper answerType (answerType != 'None')
  for (let i = next; i < chats.questions.length; i++) {
    const question = chats.questions[i]

    // 1-1. add to Chat & move currentOrder (except first chat)
    i > 0 && (await sleep(chatInterval))
    addChat(question)
    log('addChat - showNextQuestion')
    answer.currentOrder = i

    // 2. find(show) answerType & break Loop
    if (question.questionType == 'termination') {
      // 2-1. termination (!)
      termination()
    } else if (question.answerType != 'None') {
      // 2-2. show new answerType & break loop
      // set currentQuestion
      answer.currentQuestion = question
      // show answerType
      await sleep(delayBeforeNewAnswerType)
      answer.type = question.answerType
      // break Loop!
      break
    }
  }
}

export default handler
