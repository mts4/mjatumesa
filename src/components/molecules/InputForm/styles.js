import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
// import { device } from '../../.../../../theme/css/media.querys'

const Input = styled.input`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  background-color: ${COLORS.lightGrayBorderProduct};
  color: ${COLORS.grey};
  border: none;
  font-family: 'Raleway';
  font-weight: bold;
  margin-bottom: 13px;
  margin-right: ${props => props.marginRight && `${props.marginRight}px`};
  margin-left: ${props => props.marginLeft && `${props.marginLeft}px`};
`
export default Input
