import Figure from 'components/figure'
import { Surface, Text, FigureHeading, ZoomedImg } from 'components/ui'
const curves = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]

const Fig = ({ title, url, caption }) => {
  return (
    <Surface marginX={20} marginY={20} position="relative">
      <Text size={500} position="absolute" left={60} top={5}>
        {title}
      </Text>
      <Surface width={1000}>
        <img src={url} width={1000} />
        <figcaption
          style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}
        >
          {caption}
        </figcaption>
      </Surface>
    </Surface>
  )
}

export default () => (
  <Surface marginBottom={20}>
    <Surface alignItems="center" gridColumn="screen">
      <img
        style={{
          marginBottom: 10,
          alignSelf: 'center',
          transform: 'translateX(-15px)',
        }}
        width={900}
        src={require('./exponential-pdf2.jpg')}
      />
    </Surface>
    <figcaption>
      By looking at pre-ReLU values for 3b:379 activations, we see that both
      positive and negative values follow an exponential distribution. Since all
      negative values will be lifted to zero by the ReLU, 3b:379 activations are
      sparse, with only 11% of stimuli across the dataset causing activations.
    </figcaption>
  </Surface>
)
