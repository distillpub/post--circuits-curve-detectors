import React from 'react'
import { Text, Surface } from 'components/ui'

export default () => (
  <section
    id="thread-nav"
    className="thread-info"
    style={{ height: 160, marginTop: 10, marginBottom: 40 }}
  >
    <img
      className="icon"
      src={require('./multiple-pages.svg')}
      width={43}
      height={50}
    />
    <p className="explanation">
      This article is part of the <a href="/2020/circuits/">Circuits thread</a>,
      an experimental format collecting invited short articles and critical
      commentary delving into the inner workings of neural networks.
    </p>
    <a className="prev" href="/2020/circuits/early-vision/">
      An Overview of Early Vision in InceptionV1
    </a>
    <a className="next" href="/2020/circuits/equivariance/">
      Naturally Occurring Equivariance in Neural Networks
    </a>
  </section>
)
