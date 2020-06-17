import { Surface, Text } from 'components/ui'
import SyntheticLegend from '../legend'

export default () => (
  <Surface gridColumn="screen" alignItems="center" marginY={20}>
    <Surface flexFlow="row" transform="translateX(85px)">
      <Surface>
        <Text marginLeft={55} size={550}>
          Curves are invariant to fill..
        </Text>
        <img width={365} src={require('./fill.png')} />
      </Surface>
      <Surface marginLeft={0}>
        <Text marginLeft={55} size={550}>
          ..as well as color
        </Text>
        <img width={365} src={require('./color.png')} />
      </Surface>
      <Surface marginTop={70} marginLeft={3}>
        <SyntheticLegend />
      </Surface>
    </Surface>
  </Surface>
)
