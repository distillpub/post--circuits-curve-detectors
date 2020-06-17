import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'
import Colab from 'components/colab'

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

const size = 230
const Row = ({ name, header, children }) => (
  <Surface marginX={20} width={500}>
    <Header>{header}</Header>
    <Surface flexFlow="row">
      <img
        width={size}
        height={size}
        style={{ marginRight: 10 }}
        src={`https://storage.cloud.google.com/clarity--curve-detectors/three_examples/${name}/source.png`}
      />

      <video
        width={size}
        height={size}
        controls
        style={{ marginLeft: 10 }}
        poster={`https://storage.cloud.google.com/clarity--curve-detectors/three_examples/${name}/frame_99.png`}
        src={`https://storage.cloud.google.com/clarity--curve-detectors/three_examples/${name}/movie_${name}.mp4`}
      />
    </Surface>
    <figcaption
      style={{
        width: 490,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      {children}
    </figcaption>
  </Surface>
)

export default () => (
  <Figure>
    <Surface alignSelf="center">
      <Surface flexFlow="row">
        <Row name="curve" header="Occlusion">
          Our splines can trace curves even if they have significant occlusion.
          Furthermore, we can use attribution to construct complex occlusion
          rules. For instance, we can strongly penalize our spline for
          overlapping with a particular object or texture, disincentivizing the
          spline from connecting visual curves that are occluded by these
          features.
        </Row>
        <Row name="subtleS" header="Subtle Curve">
          Since curve neurons are robust to a wide variety of natural visual
          features, our curve tracing algorithm can be applied to subtle curves
          in images.
        </Row>
      </Surface>
      {false && (
        <Row name="butterfly" header="Selectivity Through Attribution">
          As we showed with curve extraction, we can use attribution vectors to
          highlight or inhibit different parts of an image. In this image we
          selectively target butterflies with one spline and leaves with
          another.
        </Row>
      )}
    </Surface>
    <Surface marginLeft={20} alignSelf="center" marginTop={20}>
      <Header>Complex Shapes</Header>
      <Surface flexFlow="row" flexWrap="wrap" width={1043}>
        {[5, 7, 8, 9].map((index) => {
          const smallSize = 115
          return (
            <Surface flexFlow="row" marginX={10} paddingBottom={10}>
              <img
                width={smallSize}
                height={smallSize}
                src={`https://storage.googleapis.com/clarity--curve-detectors/three_examples/crest${index}_v3/source.png`}
              />
              {false && (
                <img
                  width={smallSize}
                  height={smallSize}
                  src={`https://storage.googleapis.com/clarity--curve-detectors/three_examples/crest${index}_v3/frame_99.png`}
                />
              )}
              <video
                width={smallSize}
                height={smallSize}
                controls
                autoPlay
                mute
                poster={`https://storage.cloud.google.com/clarity--curve-detectors/three_examples/crest${index}_v3/frame_99.png`}
                src={`https://storage.googleapis.com/clarity--curve-detectors/three_examples/crest${index}_v3/movie_crest${index}_v3.mp4`}
              />
            </Surface>
          )
        })}
      </Surface>
      <Surface alignSelf="flex-end">
        <Colab href="https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=K5AB2S99PmC5&line=1&uniqifier=1" />
      </Surface>
    </Surface>
  </Figure>
)
