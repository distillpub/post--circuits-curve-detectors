import { Surface, Text, FigureHeading, ZoomedImg } from 'components/ui'

export default () => (
  <Surface marginY={20}>
    <Surface
      flexFlow="row"
      justifyContent="space-between"
      width={480}
      alignSelf="center"
    >
      <Surface
        flexFlow="row"
        border="1px solid rgba(0, 0, 0,0.2)"
        overflow="hidden"
        borderRadius={5}
      >
        <img width={60} src={require('./curve1-img.png')} />
        <img width={60} src={require('./curve1-attr.png')} />
      </Surface>
      <Surface
        flexFlow="row"
        border="1px solid rgba(0, 0, 0,0.2)"
        overflow="hidden"
        borderRadius={5}
      >
        <img width={60} src={require('./curve2-img.png')} />
        <img width={60} src={require('./curve2-attr.png')} />
      </Surface>
      <Surface
        flexFlow="row"
        border="1px solid rgba(0, 0, 0,0.2)"
        overflow="hidden"
        borderRadius={5}
      >
        <img width={60} src={require('./curve3-img.png')} />
        <img width={60} src={require('./curve3-attr.png')} />
      </Surface>
    </Surface>
    <figcaption style={{ alignSelf: 'center', marginTop: 8, width: 600 }}>
      Dataset examples that activate 3b:379 but were labelled "unrelated" by
      humans often contain subtle curves that are revealed by visualizing the
      image's attribution to curve neurons.
    </figcaption>{' '}
  </Surface>
)
