import { Surface } from 'components/ui'

export default () => (
  <Surface
    gridColumn="screen"
    alignItems="center"
    marginTop={10}
    marginBottom={30}
  >
    <img
      src={require('./figure.svg')}
      width={894}
      style={{ transform: `translateX(-90px)` }}
    />
  </Surface>
)
