import React from 'react'
import Colab from 'components/colab'
import { Surface, Text, FigureHeading, ZoomedImg } from 'components/ui'
import SyntheticLegend from '../legend'

export default () => (
  <Surface
    gridColumn="screen"
    alignItems="center"
    marginY={20}
    marginBottom={40}
  >
    <Surface flexFlow="row" marginLeft={103}>
      <Surface>
        <img width={760} src={require('./image.png')} />
      </Surface>
      <Surface marginTop={90}>
        <SyntheticLegend />
      </Surface>
    </Surface>
    <Surface width={703} marginRight={60} marginTop={5}>
      <Surface alignSelf="flex-end">
        <Colab href="https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=znBLPN6h32-S" />
      </Surface>
    </Surface>
  </Surface>
)
