import { Surface, Text, ZoomedImg } from 'components/ui'
import { featureVis } from 'components/helpers'

const neurons = [342, 388, 324, 340, 330, 349, 379, 406, 385, 343]

export default () => {
  return (
    <Surface alignItems="center" marginBottom={25} marginTop={10}>
      <Surface flexFlow="row">
        {neurons.map((neuron) => (
          <Surface marginX={3} _key={neuron}>
            <ZoomedImg
              size={65}
              src={featureVis('inceptionv1', 'mixed3b', neuron)}
            />
          </Surface>
        ))}
      </Surface>
      <figcaption
        style={{ marginTop: 8, alignSelf: 'flex-start', marginLeft: 3 }}
      >
        Each neuron's ideal curve, created with feature visualization, which
        uses optimization to find superstimuli.
      </figcaption>
    </Surface>
  )
}
