import styled from 'styled-components'
import { color, opacity, fontFamily, fontSize, fontWeight } from 'styled-system'

const Text = styled.span(color, opacity, fontFamily, fontSize, fontWeight)

Text.defaultProps = {
  ...color.propTypes,
  ...opacity.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes
}

export default Text
