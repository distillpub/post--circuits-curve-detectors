import { Surface } from 'components/ui'
import Colab from 'components/colab'
import SyntheticLegend from 'pages/synthetic/legend'

export default () => (
  <Surface gridColumn="screen" marginY={40} alignItems="center">
    <Surface width={703} marginBottom={5}>
      <Surface alignSelf="flex-end">
        <SyntheticLegend />
      </Surface>
    </Surface>
    <Surface paddingX={10}>
      <img src={require('./figure.png')} width={'100%'} />
    </Surface>
    <Surface alignSelf="center" flexFlow="row" transform="translateX(147px)">
      <figcaption style={{ width: 703, marginTop: 10 }}>
        We transition from angles on the left to curves on the right, making the
        stimuli rounder at each step. Each step we see the maximum activation
        for each neuron increase, and the activation "triangle" fill in as the
        two lines forming the original angle becomes a single arc.
      </figcaption>
      <Surface marginTop={10} marginLeft={20}>
        <Colab href="https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=IsP6LNwK__da&line=1&uniqifier=1" />
      </Surface>
    </Surface>
  </Surface>
)
