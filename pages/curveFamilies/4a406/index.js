import React from 'react'
import figure from './figure.svg'
import { Surface } from 'components/ui'

export default () => (
  <div
    style={{ marginTop: 10, marginBottom: 10, transform: 'translateX(-2px)' }}
  >
    <img src={figure} />
  </div>
)
