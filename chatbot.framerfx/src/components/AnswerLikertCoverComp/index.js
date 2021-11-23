import React, { useState } from 'react'
import { Frame, animate, Animatable, useAnimation, Stack } from 'framer'
import styled, { css } from 'styled-components'
import { answer, multiple } from '../../datas'
import map from 'lodash/map'
import ChoiceCover from '../AnswerMultipleComp/ChoiceCover'
import Mock from './Mock'

const ChoiceWrap = styled(Frame)`
  width: 20% !important;
  height: 50px !important;
  background: transparent !important;

  border-radius: 35px;
  background: blue;
`

const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  white-space: nowrap;
`

const AnswerLikertCoverComp = ({ ...props }) => {
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
          <ChoiceWrap key={choiceOrder}>
            <Center>
              <ChoiceCover
                type="likert"
                choice={choice}
                choiceOrder={choiceOrder}
                clicked={clicked}
                setClicked={setClicked}
              />
              <Mock choice={choice} />
            </Center>
          </ChoiceWrap>
        )
      })}
    </Stack>
  )
}

export default AnswerLikertCoverComp
