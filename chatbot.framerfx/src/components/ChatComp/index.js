import React, { useState, useEffect } from 'react'
import { Frame, animate, Animatable, useAnimation } from 'framer'
import styled, { css } from 'styled-components'
import {
  assetsEndPoint,
  loadingDuration,
  loadingEndAnimDuration,
} from '../../shared/consts'
import { sleep, scrollToLastChat } from '../../shared/utils'
import Bubble from './Bubble'
import Loading from './Loading'

// Styles
const Wrap = styled.div``

export const Content = styled.div`
  border-radius: 15.25px 15.25px 5px 15.25px;
  padding: 12px;

  background: #fd5863 !important;
  margin-bottom: 12px;
  display: inline-block;
  overflow: hidden;
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
`
export const Text = styled(Frame)`
  width: initial !important;
  height: initial !important;
  position: relative !important;
  background: transparent !important;

  font-family: Spoqa Han Sans;
  font-size: 13.5px;
  line-height: 13px;
  letter-spacing: 0.205px;
  color: #ffffff;
`

// Comp
const ChatComp = ({
  questionType,
  answerType,
  chat,
  text,
  index,
  ...props
}) => {
  const questionInitial = {
    opacity: 0,
  }
  const answerInitial = {
    opacity: 1,
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fakeLoading = async () => {
      // 1. scroll to loading
      scrollToLastChat()

      if (questionType) {
        // 2. fake loading time
        await sleep(loadingDuration + loadingEndAnimDuration)
        setLoading(false)
      }
    }
    fakeLoading()
  }, [])
  useEffect(() => {
    if (!loading && questionType) scrollToLastChat() // 3. scroll to question after loading End(!)
  }, [loading])

  return loading && questionType ? (
    <Loading questionType={questionType} />
  ) : (
    <Wrap>
      {chat.image ? (
        <Bubble
          questionType={questionType}
          answerType={answerType}
          isImg={true}
        >
          <Content>
            {chat.image.includes('http') ? (
              <Img src={chat.image} />
            ) : (
              <Img src={assetsEndPoint + '/' + chat.image} />
            )}
          </Content>
        </Bubble>
      ) : (
        ''
      )}
      {chat.koDescription ? (
        <Bubble questionType={questionType} answerType={answerType}>
          <Content>
            <Text
              initial={questionType ? questionInitial : answerInitial}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                ease: 'easeInOut',
              }}
            >
              {chat.koDescription}
            </Text>
          </Content>
        </Bubble>
      ) : (
        ''
      )}
    </Wrap>
  )
}

export default ChatComp
