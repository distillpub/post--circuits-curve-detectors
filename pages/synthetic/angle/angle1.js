import { Surface } from 'components/ui'
import SyntheticLegend from 'pages/synthetic/legend'

export default () => {
  return (
    <Surface gridColumn="screen" alignItems="center" marginY={20}>
      <Surface flexFlow="row" transform="translate(58px)">
        <Surface>
          <img width={800} src={require('./angle.png')} />
        </Surface>
        <Surface marginTop={90}>
          <SyntheticLegend />
        </Surface>
      </Surface>
    </Surface>
  )
}
