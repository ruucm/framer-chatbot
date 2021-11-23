import { answer, chats } from '../datas'
import { sleep, scrollToLastChat } from '../shared/utils'
import { addChat, showNextQuestion, termination } from '../handlers'
import { chatInterval, delayBeforeNewAnswerType } from '../shared/consts'

const handler = async subquestion => {
  // 1. make question
  var question
  if (answer.currentQuestionDepth == 0) {
    // 1-1. using currentQuestion
    question = answer.currentQuestion.subquestions[subquestion - 1]
    // 1-1-1. save subquestions
    answer.subQuestions = answer.currentQuestion.subquestions

    log('answer.subQuestions - (showSubQuestion)', answer.subQuestions)
  } else if (answer.currentQuestionDepth == 1) {
    // 1-2. using savevd subQuestions
    question = answer.subQuestions[subquestion - 1]
  }

  log('question - (showSubQuestion)', question)

  // 2-1. add to Chat
  addChat(question)
  log('addChat - showSubQuestion')

  if (question.questionType == 'termination') {
    // 2-2. termination (!)
    termination()
  } else {
    // 2-2. set currentQuestion
    answer.currentQuestion = question
    // 2-3. show answerType
    await sleep(delayBeforeNewAnswerType)
    answer.type = question.answerType

    // 3. increase currentQuestionDepth
    answer.currentQuestionDepth++

    // 4. break out subQuestions
    if (answer.currentQuestionDepth == 2 || question.answerType == 'None') {
      // await sleep(chatInterval)
      log('break out subQuestions!')
      showNextQuestion(answer.currentOrder)
    }
  }
}

export default handler
