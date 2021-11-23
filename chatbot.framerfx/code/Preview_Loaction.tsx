import * as React from 'react'
import { isCanvas } from './shared/utils'

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Preview_Loaction() {
  return (
    <div
      style={{
        width: '100%',
        background: isCanvas > 0 ? 'blue' : 'red',
      }}
    >
      <span>
        {location.href} + {isCanvas}
      </span>
    </div>
  )
}
