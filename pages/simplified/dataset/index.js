import { Surface } from 'components/ui'

export default () => (
  <Surface marginY={20}>
    <Surface
      overflow="hidden"
      borderRadius={3}
      style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
      width={700}
    >
      <img src={require('./image.png')} width={700} />
    </Surface>
    <figcaption style={{ margin: 3 }}>
      The images from the dataset that activate 3b:379 all contain curves that
      are similar to its ideal curve.
    </figcaption>
  </Surface>
)
