import Article from './article.md'
import Banner from './banner'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Home extends React.Component {
  componentDidMount() {
    ReactDOM.render(<Banner />, document.querySelector('#page-banner'))
  }

  render() {
    return (
      <d-article>
        <Article />
      </d-article>
    )
  }
}
