import React, { useState } from 'react'
import { Frame, animate, Animatable, useAnimation, Stack } from 'framer'
import styled, { css } from 'styled-components'
import { answer, multiple } from '../../datas'
import { powerEaseInOut, baseDuration } from '../../shared/consts'
import map from 'lodash/map'
import ChoiceCover from './ChoiceCover'
import Choice from './Choice'

const ChoiceWrap = styled(Frame)`
  width: initial !important;
  height: initial !important;
  background: transparent !important;

  border-radius: 35px;

  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 13px !important;
`

const AnswerMultipleComp = ({ ...props }) => {
  const [clicked, setClicked] = useState({
    key: -1,
    animating: false,
  })

  return (
    <Stack
      size={'100%'}
      direction="horizontal"
      distribution="center"
      gap={0}
      style={{
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      {map(answer.currentQuestion.choices, (choice, choiceOrder) => {
        return (
          <ChoiceWrap
            key={choiceOrder}
            initial={{
              top: 88,
            }}
            animate={{
              top: 0,
            }}
            transition={{
              top: {
                duration: baseDuration,
                ease: powerEaseInOut,
              },
              opacity: {
                duration: baseDuration,
                ease: 'linear',
              },
              delay: 0.33 + 0.77,
            }}
          >
            <ChoiceCover
              type="multiple"
              choice={choice}
              choiceOrder={choiceOrder}
              clicked={clicked}
              setClicked={setClicked}
            />

            <Choice
              choice={choice}
              choiceOrder={choiceOrder}
              clicked={clicked}
            />
          </ChoiceWrap>
        )
      })}
    </Stack>
  )
}

export default AnswerMultipleComp
