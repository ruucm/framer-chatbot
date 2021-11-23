import { answer } from '../datas'

const handler = (questionId, content, choiceId, choiceScore) => {
  var newData = {
    questionId: questionId, // (number)
    content: content, // 주관식 질문에만 해당 (string)
    choiceId: choiceId, // 객관식 질문에 해당, survey에 적혀있는 choice의 ID 사용 (number)
    choiceScore: choiceScore, // score
  }
  answer.result = [...answer.result, newData]

  log('answer.result - (setAnswers)', answer.result)
}

export default handler
