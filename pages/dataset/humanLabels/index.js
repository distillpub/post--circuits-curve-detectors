import React from 'react'
import dynamic from 'next/dynamic'

import { Surface, Text } from 'components/ui'
import { includes } from 'lodash'
import cofab from 'pages/cofab'
import {
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryChart,
  VictoryGroup,
  VictoryStack,
} from 'victory'

export const getInitialProps = () => {
  return {}
}

export default cofab(
  class HumanLabels extends React.Component {
    state = { activeGroups: [] }

    componentWillMount() {
      if (this.props.activeGroups) {
        this.setState({ activeGroups: this.props.activeGroups })
      }
    }

    onToggleGroup = (group) => {
      const { activeGroups } = this.state

      if (activeGroups.length > 0 && activeGroups[0] === group) {
        this.setState({ activeGroups: [] })
      } else {
        this.setState({ activeGroups: [group] })
      }
    }

    render() {
      let {
        bins = [],
        heights = [],
        interpolation = 'natural',
        title = '',
        stackProps = {},
        children,
        yAxisProps = {
          label: '',
        },
        probChart = false,
      } = this.props
      if (typeof window === 'undefined') {
        return null
      }
      const width = 1200
      const { activeGroups } = this.state
      const isGroupActive = (group) => includes(activeGroups, group)
      const hasActiveGroup = activeGroups.length > 0

      if (probChart) {
        yAxisProps.tickFormat = (t) => `${t.toExponential()}`
        yAxisProps.dy = -10
        stackProps.domain = { y: [0, 0.0000022] }
      }

      const colors = ['#00bcd4', '#b2ebf2', '#FFF6D7', '#ff5722']

      const colorSize = 20
      const Label = ({ index, name, count }) => (
        <Surface
          cursor="pointer"
          onClick={() => {
            this.onToggleGroup(index)
          }}
        >
          {(hovering) => {
            const showActive = hovering || isGroupActive(index)

            return (
              <Surface
                flexFlow="row"
                alignItems="center"
                borderRadius={8}
                transition="100ms ease-out all"
                background={showActive && 'rgba(0,0,0,0.02)'}
                border={`1px solid rgba(0, 0, 0, ${showActive ? 0.2 : 0})`}
                padding={5}
              >
                <Surface
                  marginRight={12}
                  width={colorSize}
                  height={colorSize}
                  borderRadius={2}
                  background={colors[index]}
                  opacity={
                    hasActiveGroup ? (isGroupActive(index) ? 1 : 0.4) : 1
                  }
                  transition="300ms ease-out all"
                  border="1px solid rgba(0, 0, 0, 0.6)"
                />
                <Surface>
                  <Text fontWeight={600} lineHeight={1.2}>
                    {name}
                  </Text>
                  <Text fontWeight={400} lineHeight={1.2}>
                    {count} images
                  </Text>
                </Surface>
              </Surface>
            )
          }}
        </Surface>
      )

      return (
        <React.Fragment>
          <Surface width={width} alignSelf="center">
            <Surface
              flexFlow="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text size={600} marginLeft={60}>
                {title}
              </Text>
              <Surface
                flexFlow="row"
                marginRight={50}
                justifyContent="space-between"
                width={700}
                alignSelf="flex-end"
                zIndex={100}
              >
                <Label index={3} name="Opposing Curve" count={102} />
                <Label index={2} name="Unrelated" count={379} />
                <Label index={1} name="Imperfect Curve" count={170} />
                <Label index={0} name="Curve" count={206} />
              </Surface>
            </Surface>
          </Surface>
          <Surface
            width={width}
            alignSelf="center"
            transform="translateY(-20px)"
          >
            <VictoryChart width={width} height={400} {...stackProps}>
              <VictoryStack
                colorScale={colors}
                interpolation={interpolation}
                animate={{
                  duration: 800,
                }}
              >
                {heights.map((label, index) => {
                  const isZero = hasActiveGroup && !isGroupActive(index)
                  const victoryData = bins
                    .map((binValue, bin) => {
                      let value =
                        Math.abs(binValue) > 800
                          ? null
                          : {
                              x: binValue,
                              y: isZero ? 0 : label[bin],
                            }

                      // we multiply times a constant then divide to avoid numerical issues
                      if (value && probChart) {
                        value.y = value.y / 1000 / 1600
                      }

                      return value
                    })
                    .filter((i) => i !== null)

                  const addInterpolation = interpolation
                    ? { interpolation }
                    : {}

                  return (
                    <VictoryGroup data={victoryData} key={index}>
                      <VictoryArea
                        {...addInterpolation}
                        events={[
                          {
                            target: 'data',
                            eventHandlers: {
                              onClick: () => {
                                this.onToggleGroup(index)
                              },
                            },
                          },
                        ]}
                      />
                    </VictoryGroup>
                  )
                })}
              </VictoryStack>
              <VictoryAxis
                crossAxis={false}
                tickCount={17}
                label="Activations"
              />

              <VictoryAxis
                axisLabelComponent={<VictoryLabel dy={-13} />}
                tickCount={5}
                offsetX={50}
                dependentAxis
                {...yAxisProps}
              />
              <VictoryLine
                style={{
                  data: { strokeWidth: 1, stroke: 'rgba(0, 0, 0, 0.6)' },
                }}
                data={[
                  { x: 0, y: 1 },
                  { x: 0, y: 0 },
                ]}
              />
            </VictoryChart>
          </Surface>
          <figcaption
            style={{
              width: 703,
              marginTop: -20,
              alignSelf: 'center',
            }}
          >
            {children}
          </figcaption>
        </React.Fragment>
      )
    }
  }
)
