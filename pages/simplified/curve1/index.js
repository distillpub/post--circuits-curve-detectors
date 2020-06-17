import React from 'react'
import { Surface, Text, ZoomedImg } from 'components/ui'
import Figure from 'components/figure'
import { featureVis } from 'components/helpers'
import cofab from 'pages/cofab'

import { VictoryArea, VictoryLabel, VictoryChart, VictoryGroup } from 'victory'

const neurons = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]
export default cofab(({ allActivations, icons }) => {
  const activations = allActivations[neurons.indexOf(379)]

  return (
    <Figure>
      <Surface alignSelf="center" position="relative" width={703}>
        <Surface
          flexFlow="row"
          alignItems="center"
          marginLeft={5}
          marginBottom={20}
        >
          <ZoomedImg
            src={featureVis('inceptionv1', 'mixed3b', 379)}
            size={30}
          />
          <Text marginLeft={5} fontSize={20}>
            3b:379 Activations by Orientation
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
          Later in this article we'll look in depth at activations to synthetic
          curve images.
        </figcaption>
      </Surface>
    </Figure>
  )
})
