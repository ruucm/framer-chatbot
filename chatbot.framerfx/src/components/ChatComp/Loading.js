import React from 'react'
import { Frame, animate, Animatable, useAnimation, Stack } from 'framer'
import styled, { css } from 'styled-components'
import { loadingDuration, loadingEndAnimDuration } from '../../shared/consts'
import Bubble from './Bubble'
import { Content, Text } from './'

const Wrap = styled.div`
  width: 25.25px;
  height: 18px;
`

const Loading = ({ questionType, ...props }) => {
  return (
    <Bubble questionType={1}>
      <Content>
        <Text>
          <Wrap>
            <Stack
              direction="horizontal"
              distribution="center"
              background="#ebebeb"
              size="100%"
              gap={4.69}
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{
                delay: loadingDuration,
                duration: loadingEndAnimDuration,
                ease: 'easeInOut',
              }}
            >
              <Frame size={6.8} background="white" opacity={0.25} radius={20} />
              <Frame size={6.8} background="white" opacity={0.5} radius={20} />
              <Frame size={6.8} background="white" opacity={1} radius={20} />
            </Stack>
          </Wrap>
        </Text>
      </Content>
    </Bubble>
  )
}

export default Loading
