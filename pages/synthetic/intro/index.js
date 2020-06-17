import figure from './figure.svg'
import { Surface, Text } from 'components/ui'
import SyntheticLegend from 'pages/synthetic/legend'

export default () => (
  <Surface gridColumn="screen" alignItems="center" marginY={20}>
    <Surface flexFlow="row" marginLeft={-3}>
      <img src={figure} width={900} />
      <Surface marginLeft={5} marginTop={5}>
        <SyntheticLegend />
      </Surface>
    </Surface>
  </Surface>
)
