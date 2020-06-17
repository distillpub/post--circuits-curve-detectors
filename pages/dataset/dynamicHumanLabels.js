import dynamic from 'next/dynamic'
import Figure from 'components/figure'

const NoSSRComponent = dynamic(() => import('./humanLabels'), {
  ssr: false,
})

export default (props) => (
  <Figure height={540}>
    <NoSSRComponent {...props} />
  </Figure>
)
