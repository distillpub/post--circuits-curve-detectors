import Figure from 'components/figure'
import { range } from 'lodash'
import { Icon } from 'evergreen-ui'
import { Surface, Text, ZoomedImg } from 'components/ui'
import { featureVis } from 'components/helpers'
import Colab from 'components/colab'
import React from 'react'

export default class DatasetQuilt extends React.Component {
  state = { showAttrs: false, page: 0 }

  componentWillMount() {
    if (this.props.isAttrs) {
      this.setState({ showAttrs: true })
    }
  }

  render() {
    const { isAttrs = false } = this.props
    const { showAttrs, page } = this.state

    return (
      <Figure>
        <Surface alignSelf="center" marginTop={10}>
          <Surface
            flexFlow="row"
            justifyContent="space-between"
            alignItems="center"
            paddingX={20}
            marginBottom={10}
          >
            <Surface flexFlow="row" alignItems="center">
              <Text fontSize={20}>←</Text>
              <Text size={500} marginLeft={10}>
                more <b>negative</b> activations
              </Text>
            </Surface>
            <Surface flexFlow="row" alignSelf="center" alignItems="center">
              <Surface flexFlow="row" alignItems="center">
                <Text marginRight={5}>Random Dataset Images by </Text>
                <img
                  src={featureVis('inceptionv1', 'mixed3b', 379)}
                  width={30}
                  style={{ borderRadius: 5 }}
                />
                <Text marginLeft={5}>
                  3b:379 {showAttrs ? 'Attribution' : 'Activation'}
                </Text>
              </Surface>
              {isAttrs && (
                <Surface cursor="pointer" marginLeft={10}>
                  {(hovering) => (
                    <Text
                      style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
                      size={500}
                      fontWeight={500}
                      opacity={hovering ? 1 : 0.8}
                      onClick={() => {
                        if (isAttrs) {
                          this.setState({ showAttrs: !showAttrs })
                        }
                      }}
                    >
                      {showAttrs ? 'Show images' : 'Show attribution'}
                    </Text>
                  )}
                </Surface>
              )}
            </Surface>
            <Surface flexFlow="row" alignItems="center">
              <Text size={500} marginRight={10}>
                more <b>positive</b> activations
              </Text>
              <Text fontSize={20}>→</Text>
            </Surface>
          </Surface>
          <Surface flexFlow="row" position="relative" onMouseDown={() => {}}>
            {range(18).map((i) => {
              const value = -800 + i * 100

              const count = 6
              const size = 60

              return (
                <React.Fragment>
                  {value === 0 && (
                    <Surface
                      marginX={5}
                      width={1}
                      height={count * size + 4 * count}
                      background="rgba(0, 0, 0, 0.2)"
                    ></Surface>
                  )}
                  <Surface marginX={2}>
                    {range(count).map((index) => {
                      const indexWithPage = page * count + index
                      const prefix = `https://storage.googleapis.com/distill-curve-detectors/quilt/${value}/${indexWithPage}`

                      return (
                        <Surface
                          flexFlow="row"
                          marginY={2}
                          position="relative"
                          width={size}
                          height={size}
                          overflow="hidden"
                          borderRadius={3}
                          border="1px solid rgba(0, 0, 0, 0.2)"
                        >
                          <img
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              opacity: showAttrs ? 0 : 1,
                              transition: '300ms all ease-in',
                            }}
                            width={size}
                            src={`${prefix}/img.jpg`}
                          />
                          <img
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              opacity: showAttrs ? 1 : 0,
                              transition: '300ms all ease-in',
                            }}
                            width={size}
                            src={`${prefix}/attr.jpg`}
                          />
                        </Surface>
                      )
                    })}
                    <Surface borderTop marginTop={4} paddingLeft={3}>
                      <Text>
                        {value === 900 || value === -800 ? `${value}+` : value}
                      </Text>
                    </Surface>
                  </Surface>
                </React.Fragment>
              )
            })}
          </Surface>
          <img
            style={{ transform: 'translateX(3px)', marginTop: 5 }}
            width={1158}
            src={require('./caption.svg')}
          />
          <Surface
            alignSelf="flex-end"
            flexFlow="row"
            alignItems="center"
            marginTop={30}
            marginRight={0}
            marginBottom={10}
            paddingY={2}
          >
            {page < 3 && (
              <Surface cursor="pointer" background="transparent">
                {(hovering) => (
                  <Surface
                    style={{
                      borderBottom: `1px solid rgba(0, 0, 0, ${
                        hovering ? 0.4 : 0.1
                      }`,
                    }}
                    opacity={hovering ? 1 : 0.7}
                    transition="200ms ease-out all"
                    flexFlow="row"
                    alignItems="center"
                  >
                    <Text
                      fontWeight={600}
                      size={400}
                      onClick={() => {
                        this.setState({ page: page + 1 })
                      }}
                    >
                      Load more examples
                    </Text>
                  </Surface>
                )}
              </Surface>
            )}
            {isAttrs && (
              <Colab
                marginLeft={15}
                href="https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=yBQX5TrkWjlP"
              />
            )}
          </Surface>
        </Surface>
      </Figure>
    )
  }
}
