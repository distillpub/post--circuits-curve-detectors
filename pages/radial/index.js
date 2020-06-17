import React from 'react'
import figure from './figure.svg'
import CurvesRadial from './radial'
import { Surface, Text } from 'components/ui'
import cofab from 'pages/cofab'

export default cofab(({ activations, layer, neurons }) => {
  const size = 300
  return (
    <Surface
      gridColumn="screen"
      alignItems="center"
      marginY={20}
      marginBottom={60}
    >
      <Surface transform="translate(-3px)">
        <img src={figure} />
        <Surface
          marginLeft={348}
          marginTop={-55}
          width={size}
          justifyContent="center"
          alignItems="center"
          height={size + 62}
        >
          <Surface>
            <CurvesRadial
              responsesByNeuron={activations}
              neurons={neurons}
              layer={layer}
              size={size}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
          <Text marginTop={20} fontStyle="italic">
            Hover to isolate a neuron
          </Text>
        </Surface>
      </Surface>
    </Surface>
  )
})
