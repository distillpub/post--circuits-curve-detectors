import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'

const Header = ({ children }) => (
  <Text
    marginBottom={10}
    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
    paddingBottom={1}
    paddingLeft={5}
    width={'100%'}
    fontSize={16}
    fontWeight={600}
  >
    {children}
  </Text>
)

const size = 264

export default () => (
  <Figure>
    <Surface flexFlow="row" alignSelf="center">
      <Surface marginX={5}>
        <Header>Source</Header>
        <img
          width={size}
          src="https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly_leaf/source.png"
        />
      </Surface>
      <Surface marginX={5}>
        <Header>Tracing</Header>
        <video
          width={size}
          height={size}
          controls
          poster="https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly_leaf/frame_99.png"
          src="https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly_leaf/movie_butterfly_leaf.mp4"
        />
      </Surface>
      <Surface marginX={5}>
        <Header>Tracing NMF Components</Header>
        <video
          width={size}
          height={size}
          controls
          poster="https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly/frame_99.png"
          src="https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly/movie_butterfly.mp4"
        />
      </Surface>
    </Surface>
  </Figure>
)
