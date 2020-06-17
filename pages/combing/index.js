import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'

const Neuron = ({ src, href, ...style }) => (
  <Surface marginTop={3}>
    <a href={href} target="_blank" style={{ borderBottom: 0 }}>
      <img src={src} width={120} style={{ ...style, borderRadius: 5 }} />
    </a>
  </Surface>
)

export default () => {
  return (
    <Surface
      flexFlow="row"
      alignItems="center"
      justifyContent="center"
      gridColumn="screen"
      marginY={20}
    >
      <Surface marginX={20}>
        <Text marginLeft={10} fontWeight={500}>
          AlexNet
        </Text>
        <Neuron
          href="https://microscope.openai.com/models/alexnet/conv3_1_0/348"
          src={require('./alexnet.jpg')}
        />
      </Surface>
      <Surface marginX={20}>
        <Text marginLeft={10} fontWeight={500}>
          InceptionV1
        </Text>
        <Neuron
          href="https://microscope.openai.com/models/inceptionv1/inceptionv1_0/385"
          src={require('./inceptionv1.jpg')}
        />
      </Surface>
      <Surface marginX={20}>
        <Text marginLeft={10} fontWeight={500}>
          InceptionV3
        </Text>
        <Neuron
          href="https://microscope.openai.com/models/inceptionv3_slim/InceptionV3_InceptionV3_Mixed_5d_concat_0/79"
          src={require('./inceptionv3.jpg')}
        />
      </Surface>
      <Surface marginX={20}>
        <Text marginLeft={10} fontWeight={500}>
          Monkey V4
        </Text>
        <Neuron src={require('./monkey.png')} />
      </Surface>
    </Surface>
  )
}
