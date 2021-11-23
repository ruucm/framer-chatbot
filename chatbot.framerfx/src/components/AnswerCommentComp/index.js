import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { setAnswers, showNextQuestion, handleAnswerClick } from '../../handlers'
import { answer } from '../../datas'
import { sleep, scrollToLastChat } from '../../shared/utils'
import { url } from 'framer/resource'
import map from 'lodash/map'
import TextareaAutosize from 'react-autosize-textarea'

const Wrap = styled.div`
  /* background: rebeccapurple; */
  position: absolute;
  width: 100%;
  bottom: 68px;
`
const TextBox = styled(TextareaAutosize)`
  width: 331px;
  min-height: 33.5px;
  margin: 0 auto;
  display: block;
  border-radius: 15.25px 15.25px 15.25px 5px;
  resize: none;
  padding: 10.5px 62px 10px 17.5px;

  /* fonts */
  font-family: Spoqa Han Sans;
  font-size: 13.5px;
  line-height: 18.25px;
  color: #292929;

  /* inner border */
  border: none;
  -o-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;
  -moz-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;
  -webkit-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;

  /* Remove textarea inner shadow on Mobile Safari (iPhone) */
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`
const SendIcon = styled.div`
  width: 27.5px;
  height: 27.5px;
  background-color: #bfbfbf;
  border-radius: 200px;
  position: absolute;
  right: calc(50% - 165.5px + 3px);
  bottom: 3px;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      background: linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289);
    `}
`
const Arrow = styled.img`
  width: 15.25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const AnswerCommentComp = ({ ...props }) => {
  const [comment, setComment] = useState('')
  return (
    <Wrap>
      <TextBox
        onResize={e => {}}
        onChange={e => {
          setComment(e.target.value)
        }}
        onClick={() => scrollToLastChat()} // fix galaxy issue that keyboard covers chatList
      />
      <SendIcon
        onClick={() => {
          handleAnswerClick(comment, null)
        }}
        active={comment}
      >
        <Arrow src={url('../images/arrow-01.svg')} />
      </SendIcon>
    </Wrap>
  )
}

export default AnswerCommentComp
