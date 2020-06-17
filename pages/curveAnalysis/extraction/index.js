import { Surface } from 'components/ui'

export default () => (
  <Surface marginY={20}>
    <div>
      <img width={703} src={require('./extraction.png')} />
    </div>
    <figcaption style={{ marginLeft: 10 }}>
      Angiogram example from <d-cite bibtex-key="raghupathy2004curve"></d-cite>{' '}
      , Figure 2.1.
    </figcaption>
  </Surface>
)
