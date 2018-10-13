import styled from 'styled-components'

import { background } from '../../utils/style-props'

const Background = styled.div(
  {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  background
)

Background.propTypes = {
  ...background.propTypes
}

export default Background
