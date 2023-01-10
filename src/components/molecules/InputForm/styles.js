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
  font-weight: ${props => (props.fontWeight ? `${props.fontWeight}` : 'bold')};
  font-style: ${props => (props.fontStyle ? `${props.fontStyle}` : 'normal')};
  margin-bottom: 13px;
  margin-right: ${props => props.marginRight && `${props.marginRight}px`};
  margin-left: ${props => props.marginLeft && `${props.marginLeft}px`};
  margin-left: ${props => props.marginLeft && `${props.marginLeft}px`};
  padding-left: ${props => props.iconLeft && '12px'};
  background-image: url(${props => props.iconLeft && `${props.iconLeft}`});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position-x: 10px;
  background-position-y: center;
  text-align: ${props =>
    props.placeHolderAlign ? props.placeHolderAlign : 'start'};
  ::placeholder {
    text-align: ${props => props.placeHolderAlign && props.placeHolderAlign};
  }
  :-ms-input-placeholder {
    text-align: ${props => props.placeHolderAlign && props.placeHolderAlign};
  }

  ::-ms-input-placeholder {
    text-align: ${props => props.placeHolderAlign && props.placeHolderAlign};
  }
`
export default Input
