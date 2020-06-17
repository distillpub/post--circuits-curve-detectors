import React from 'react'
import Figure from 'components/figure'
import cofab from 'pages/cofab'
import CurvesRadial from 'pages/radial/radial'
import { Surface, ZoomedImg } from 'components/ui'

export default cofab(({ neurons, activations, layer }) => {
  const neuronSize = 30
  const size = 110
  const curveSomelier = {
    // conv2d2: [171, ],
    mixed3a: [137, 81, 104, 92, 145, 95, 163, 71, 147, 189],
  }

  return (
    <Figure>
      <Surface
        alignItems="center"
        gridColumn="screen"
        marginTop={10}
        marginBottom={40}
        flexFlow="row"
        justifyContent="center"
      >
        <div style={{ position: 'relative' }}>
          <CurvesRadial
            size={300}
            neuronSize={60}
            responsesByNeuron={activations}
            neurons={neurons}
            layer={layer}
            neuronPadding={10}
            fillOpacity={0.4}
            orientationType={'max'}
          />
        </div>
        <Surface flexFlow="row" width={900} flexWrap="wrap" paddingX={80}>
          {(curveSomelier[layer] || neurons).map((neuron) => (
            <Surface marginX={18}>
              <CurvesRadial
                responsesByNeuron={activations}
                size={size}
                neurons={[neuron]}
                layer={layer}
                neuronSize={neuronSize}
                neuronPadding={10}
                fillOpacity={0.4}
                orientationType={'max'}
              />
            </Surface>
          ))}
        </Surface>
      </Surface>
    </Figure>
  )
})
