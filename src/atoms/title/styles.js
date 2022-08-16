import styled from 'styled-components'

const Text = styled.h1`
  color: ${props => (props.color ? props.color : 'black')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '30px')};
`
export default Text
