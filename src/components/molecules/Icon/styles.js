import styled from 'styled-components'

const Icono = styled.div`
  width: ${props => (props.width ? props.width : '20px')};
  height: ${props => (props.height ? props.height : '20px')};
`
export default Icono
