import { Tooltip, Position } from 'evergreen-ui'
import React from 'react'
import { Surface, Text, ZoomedImg } from 'components/ui'
import { featureVis } from 'components/helpers'

export default class Tuning1 extends React.Component {
  render() {
    const neurons = [379, 406, 385, 343, 342, 388, 340, 330, 349]

    const colors = [
      `rgb(183,89,81)`,
      `rgb(193,159,91)`,
      `rgb(170,198,94)`,
      `rgb(131,199,100)`,
      `rgb(123,197,157)`,
      `rgb(90,148,194)`,
      `rgb(32,58,188)`,
      `rgb(129,72,190)`,
      `rgb(175,73,143)`,
    ]

    const neuronSize = 67
    const border = 3

    const Header = ({ children }) => (
      <Surface borderBottom="1px solid rgba(0, 0, 0, 0.2)" marginBottom={20}>
        <Text size={600} marginBottom={5}>
          {children}
        </Text>
      </Surface>
    )

    return (
      <Surface
        width={850}
        marginY={20}
        alignSelf="center"
        flexFlow="row"
        justifyContent="space-between"
      >
        <Surface>
          <Header>Neuron Responses to Rotated Dataset Examples</Header>

          <Surface flexFlow="row">
            <Surface marginTop={10} marginRight={10}>
              {neurons.map((neuron, index) => (
                <Tooltip content={`mixed3b:${neuron}`} position={Position.LEFT}>
                  <Surface
                    overflow="hidden"
                    style={{ border: `${border}px solid ${colors[index]}` }}
                    borderRadius={5}
                    width={neuronSize}
                    height={neuronSize}
                    marginY={3}
                  >
                    <ZoomedImg
                      size={neuronSize}
                      style={{ borderRadius: 0 }}
                      src={featureVis('inceptionv1', 'mixed3b', neuron)}
                    />
                  </Surface>
                </Tooltip>
              ))}
            </Surface>

            <img width={400} src={require('./tuning-transparent.png')} />
          </Surface>
        </Surface>

        <Surface width={330} marginTop={60}>
          <Text opacity={0.9} fontSize={14} lineHeight={1.3}>
            We collect dataset examples that maximally activate neuron. We
            rotate them by increments of 1 degree from 0 to 360 degrees and
            record activations.
          </Text>
          <Text marginTop={20} opacity={0.9} fontSize={14} lineHeight={1.3}>
            The activations are shifted so that the points where each neuron
            responds are aligned. The curves are then averaged to create a
            typical response curve.
          </Text>
          <img
            width={300}
            style={{ alignSelf: 'center', marginTop: 20 }}
            src={require('./tuning-methodology.png')}
          />
        </Surface>
      </Surface>
    )
  }
}
