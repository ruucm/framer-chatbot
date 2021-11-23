import { chats } from '../datas'

const handler = question => {
  if (chats.list == null) chats.list = [question]
  else chats.list = [...chats.list, question]
}

export default handler
