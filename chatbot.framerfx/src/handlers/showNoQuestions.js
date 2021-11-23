import { addChat } from '../handlers'

const handler = () => {
  addChat({
    questionType: 'greetings',
    koDescription:
      "You've already finished talking with me, or it's not time to talk ~",
  })
}

export default handler
