import { Surface, Text } from 'components/ui'
import cofab from '../cofab'

export default cofab(({ images }) => (
  <Surface
    flexFlow="row"
    alignItems="center"
    justifyContent="center"
    gridColumn="screen"
    marginY={20}
  >
    <Surface alignItems="center">
      <Surface alignItems="center" flexFlow="row">
        <Surface
          flexFlow="row"
          flexWrap="wrap"
          width={64 * 7 + 2}
          borderRadius={5}
          overflow="hidden"
        >
          {images.slice(0, 7 * 4).map((image) => (
            <img style={{ margin: 0, padding: 0 }} src={image} />
          ))}
        </Surface>
      </Surface>
      <Text fontStyle="italic" marginTop={8}>
        Perpindicular lines are helpful across many natural features like{' '}
        <b>tires</b>, <b>clocks</b>, and <b>logos</b>
      </Text>
    </Surface>
  </Surface>
))
