import React from 'react'
import { Frame, animate, Animatable, useAnimation, Stack } from 'framer'
import styled, { css } from 'styled-components'
import { setAnswers, showNextQuestion, handleAnswerClick } from '../../handlers'
import { answer, likert } from '../../datas'
import { sleep, isMobile } from '../../shared/utils'
import { url } from 'framer/resource'
import map from 'lodash/map'

const Desc = styled(Frame)`
  display: inline-block;
  width: 20% !important;
  height: 100% !important;
  background: transparent !important;
  text-align: center;
  vertical-align: top;
  position: relative;
  &:first-child {
    > div {
      padding-left: 3vw;
    }
  }
  &:last-child {
    > div {
      padding-right: 3vw;
    }
  }
`
const DescText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-family: Spoqa Han Sans;
  font-size: 10.25px;
  font-weight: bold;
  line-height: 1.22;
  color: #000000;
  padding: 0 1.5vw;
`

const AnswerLikertDescComp = ({ ...props }) => {
  const choices = answer.currentQuestion.choices
  return (
    <Stack
      center
      size={'85%'}
      direction="horizontal"
      distribution="center"
      gap={0}
      style={{
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      {map(choices, (choice, choiceOrder) => {
        return (
          <Desc
            key={choiceOrder}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: likert.descOpacity,
            }}
            transition={likert.descTransition}
          >
            <DescText
              dangerouslySetInnerHTML={{
                __html: choice.koDescription,
              }}
            />
          </Desc>
        )
      })}
    </Stack>
  )
}

export default AnswerLikertDescComp
