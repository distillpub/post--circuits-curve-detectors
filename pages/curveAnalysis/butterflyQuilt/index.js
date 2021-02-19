import { Surface } from 'components/ui'
import { range } from 'lodash'
import Colab from 'components/colab'

const rows = 3
const cols = 5
const size = 180
const ourFavorites = [0, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19]
export default () => (
  <Surface marginY={40} gridColumn="screen" alignItems="center">
    <Surface>
      {range(rows).map((row) => (
        <Surface flexFlow="row">
          {range(cols).map((col) => {
            const index = ourFavorites[row * cols + col]
            return (
              <video
                style={{
                  width: size,
                  height: size,
                  margin: 0,
                  padding: 0,
                  objectFit: 'cover',
                }}
                width={size}
                height={size}
                muted
                loop
                autoPlay
                src={`https://storage.googleapis.com/distill-curve-detectors/butterfly_quilt_all_v3/10_5000000/${index}/movie_${index}.mp4`}
              />
            )
          })}
        </Surface>
      ))}
    </Surface>
    <Surface
      flexFlow="row"
      justifyContent="space-between"
      width={880}
      alignSelf="center"
      marginTop={5}
    >
      <figcaption>
        We traced 23 butterfly images and chose our 15 favorites.
      </figcaption>
      <Colab href="https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=yBQX5TrkWjlP" />
    </Surface>
  </Surface>
)
