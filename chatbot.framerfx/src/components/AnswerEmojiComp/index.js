import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { handleAnswerClick } from '../../handlers'
import { sleep } from '../../shared/utils'
import { url } from 'framer/resource'
import Emoji from './Emoji'
import map from 'lodash/map'
import { Stack } from 'framer'

const AnswerEmojiComp = ({ ...props }) => {
  const [clicked, setClicked] = useState({
    key: -1,
    animating: false,
  })
  const emojiTypes = ['angry', 'sad', 'normal', 'good', 'happy']
  return (
    <div>
      {/* Base Emoji */}
      <Stack
        size={'100%'}
        direction="horizontal"
        distribution="center"
        gap={19}
      >
        {map(emojiTypes, (type, choiceOrder) => {
          return (
            <Emoji
              key={choiceOrder}
              choiceOrder={choiceOrder}
              type={type}
              isBase={true}
              clicked={clicked}
              setClicked={setClicked}
            />
          )
        })}
      </Stack>
      <Stack
        size={'100%'}
        direction="horizontal"
        distribution="center"
        gap={19}
      >
        {map(emojiTypes, (type, choiceOrder) => {
          return (
            <Emoji
              key={choiceOrder}
              choiceOrder={choiceOrder}
              type={type}
              clicked={clicked}
              setClicked={setClicked}
            />
          )
        })}
      </Stack>
    </div>
  )
}

export default AnswerEmojiComp
