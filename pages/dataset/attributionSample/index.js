import { Surface } from 'components/ui'

export default () => (
  <Surface width={703} alignItems="center" marginY={20}>
    <img
      style={{ alignSelf: 'center' }}
      src={require('./figure.svg')}
      width={300}
    />
  </Surface>
)
