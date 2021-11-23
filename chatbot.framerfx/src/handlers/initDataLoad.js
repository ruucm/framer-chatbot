import { chats, company } from '../datas'
import axios from 'axios'
import { endPoint, token, assetsEndPoint, isProd } from '../shared/consts'
import { showNextQuestion, showNoQuestions } from '../handlers'
import { sleep, isCanvas } from '../shared/utils'
import { demoQuestions } from '../datas'

const handler = async () => {
  log('init load!')

  if (token == 'demo' || isCanvas) {
    chats.questions = demoQuestions
    company.sector = 'Demo'
    showNextQuestion(-1) // add first chat
  } else
    axios
      .get(endPoint + '/Surveys/getSurvey' + '/' + token, {})
      .then(async res => {
        chats.questions = res.data.survey.questions
        log('initDataLoad', res)
        log('all questions', res.data.survey.questions)

        company.name = res.data.company.name
        company.sector = res.data.company.sector
        company.logo =
          'center / contain no-repeat url(' +
          assetsEndPoint +
          '/' +
          res.data.company.logo +
          ')'

        showNextQuestion(-1) // add first chat
      })
      .catch(error => {
        log('error - (initDataLoad)', error)
        showNoQuestions()
      })
}

export default handler
