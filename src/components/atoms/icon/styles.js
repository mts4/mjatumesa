import styled from 'styled-components'
import { hexToCSSFilter } from 'hex-to-css-filter'

const Icono = styled.img`
  filter: ${props => props.color && hexToCSSFilter(props.color)};
`
export default Icono
