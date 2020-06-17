import { Surface, Text, FigureHeading, ZoomedImg } from 'components/ui'

export default () => (
  <Surface flexFlow="row" marginLeft={10}>
    <Text marginRight={5} fontWeight={600}>
      0σ
    </Text>
    <Surface alignItems="center">
      <img
        style={{ borderRadius: 5, marginTop: 1 }}
        width={140}
        src={require('./scale.png')}
      />
      <Text fontSize={14}>Standard Deviations</Text>
    </Surface>
    <Text marginLeft={5} fontWeight={600}>
      25σ
    </Text>
  </Surface>
)
