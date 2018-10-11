import styled from 'styled-components'

const Page = styled.div({
  background: 'white',
  maxWidth: '960px',
  margin: 'auto',
  padding: '3rem',
  borderRadius: '3rem',
  '& > :last-child': {
    marginBottom: 0
  }
})

export default Page
