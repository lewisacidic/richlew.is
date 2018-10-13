import styled from 'styled-components'
import {
  position,
  space,
  width,
  height,
  size,
  maxWidth,
  color,
  opacity,
  order,
  alignSelf,
  verticalAlign
} from 'styled-system'

const Box = styled.div(
  position,
  space,
  width,
  height,
  size,
  maxWidth,
  color,
  opacity,
  order,
  alignSelf,
  verticalAlign
)

Box.propTypes = {
  ...position.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...size.propTypes,
  ...maxWidth.propTypes,
  ...color.propTypes,
  ...opacity.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
  ...verticalAlign.propTypes
}

export default Box
