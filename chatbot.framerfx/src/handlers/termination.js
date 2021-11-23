import { answer } from '../datas'
import axios from 'axios'
import { endPoint, token } from '../shared/consts'
import { scrollToLastChat, closeWindow } from '../shared/utils'

const handler = () => {
  //  send results
  log('send results!', answer.result)

  if (token == 'demo') {
    console.log('demo end')
    scrollToLastChat()
    closeWindow()
  } else if (answer.currentQuestion.questionType == 'Remind')
    // handle Remind termination
    axios
      .post(endPoint + '/Surveys/delaySurvey/' + token, {
        token: token,
        hoursToDelay: answer.result[answer.result.length - 1].choiceScore,
      })
      .then(response => {
        log('response - (Remind)', response)
        scrollToLastChat()
        closeWindow()
      })
      .catch(error => {
        log('error - (Remind)', error)
      })
  else
    axios
      .post(endPoint + '/Surveys/submit/' + token, {
        token: token,
        answers: answer.result,
      })
      .then(response => {
        log('response', response)
        scrollToLastChat()
        closeWindow()
      })
      .catch(error => {
        log('error', error)
      })

  // hide answerType
  answer.type = 'None'
}

export default handler
