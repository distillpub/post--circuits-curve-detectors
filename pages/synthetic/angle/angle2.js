import { Surface } from 'components/ui'

export default () => {
  const w = 400
  return (
    <Surface
      gridColumn="screen"
      flexFlow="row"
      alignItems="center"
      justifyContent="space-between"
      padding={100}
    >
      <img width={w} src={require('./angle.png')} />
      <img width={w} src={require('./angle2.png')} />
      <img width={w} src={require('./angle3.png')} />
    </Surface>
  )
}
