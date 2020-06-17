import React from 'react'
import { Surface, Text, ZoomedImg } from 'components/ui'
import Figure from 'components/figure'
import { featureVis } from 'components/helpers'
import cofab from 'pages/cofab'
import Colab from 'components/colab'

import { VictoryArea, VictoryLabel, VictoryChart, VictoryGroup } from 'victory'

const neurons = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]
export default cofab(({ allActivations, icons }) => {
  return (
    <Figure>
      <Surface alignSelf="center" position="relative" width={703}>
        <Surface
          flexFlow="row"
          alignItems="center"
          marginLeft={5}
          marginBottom={20}
        >
          <Text marginLeft={5} fontSize={20}>
            Curve Family Activations by Orientation
          </Text>
        </Surface>
        <VictoryGroup
          margin={0}
          padding={0}
          style={{
            data: { strokeWidth: 3, fillOpacity: 0.4 },
          }}
          width={703}
          height={120}
        >
          {allActivations.map((activations) => (
            <VictoryArea
              interpolation="basis"
              style={{
                data: {
                  fill: 'transparent',
                  stroke: 'rgba(0, 0, 0, 0.6)',
                  strokeWidth: 2,
                },
              }}
              data={activations.map((y, x) => ({ x, y }))}
            />
          ))}
        </VictoryGroup>
        <Surface
          flexFlow="row"
          paddingTop={3}
          background="white"
          paddingBottom={3}
          borderRadius={5}
          overflow="hidden"
          border="1px solid rgba(0, 0, 0, 0.2)"
        >
          {icons.map((icon) => {
            const size = Math.floor(703 / icons.length)

            return <img src={icon} width={size} height={size} />
          })}
        </Surface>
        <figcaption style={{ width: 703, marginTop: 5 }}>
          Activations are normalized by the neuron's maximum activation. We'll
          examine activations by neuron in more depth when we explore syntheti
          stimuli.
        </figcaption>
        <Surface alignSelf="flex-end" marginTop={5}>
          <Colab href="https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=iiV2UfNr-us5" />
        </Surface>
      </Surface>
    </Figure>
  )
})
