import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Chat } from '../../../code/Chat'
import { scrollToLastChat, sleep } from '../../shared/utils'
import { loadingDuration, loadingEndAnimDuration } from '../../shared/consts'
import map from 'lodash/map'
import Lychee from './Lychee'

const Wrap = styled.div`
  overflow: scroll;
  /* padding for preventing cropping answers */
  padding-bottom: 100px;
  background: white;
  height: 100%;
  padding-left: 49.5px;
  padding-right: 15.5px;
  padding-top: 35.5px;
  /* fix right border of Main not show up */
  border-right: 2.5px solid #ebebeb;
  border-left: 2.5px solid #ebebeb;
  ::-webkit-scrollbar {
    display: none;
  }
`

const ChatWrap = styled.div`
  position: relative;
`

const ChatListComp = ({ chatList, ...props }) => {
  return (
    <Wrap className="chat-list">
      {map(chatList, (chat, id) => {
        return (
          <ChatWrap key={id}>
            {id == 0 ||
            (chat.questionType && // show Lychee when it's a question
              !chatList[id - 1].questionType) ? ( // show Lychee only after an answer
              <Lychee />
            ) : (
              ''
            )}
            <Chat
              index={id}
              chat={chat}
              questionType={chat.questionType}
              answerType={chat.answerType}
            />
          </ChatWrap>
        )
      })}
    </Wrap>
  )
}

export default ChatListComp
