import React, { useState } from 'react'
import { Frame, animate, Animatable, useAnimation } from 'framer'
import styled, { css } from 'styled-components'
import { sleep } from '../../shared/utils'

const Wrap = styled.div`
  line-height: 35px;
  border-radius: 35px;
  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;
  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;
  box-shadow: inset 0px 0px 0px 1.5px #fd5863;
  font-family: Spoqa Han Sans;
  font-size: 13.5px;
  font-weight: bold;
  letter-spacing: 0.205px;
  color: #292929;
  padding: 0 12px;
  display: inline-block;
  visibility: hidden;
`

const Mock = ({ choice, ...props }) => {
  return choice ? <Wrap>{choice.koDescription}</Wrap> : ''
}

export default Mock
