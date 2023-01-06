import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'
import { device } from '../../.../../../theme/css/media.querys'

const ButtonPrimary = styled.button`
  display: ${props => props.iconLeft && `flex`};
  justify-content: ${props => props.iconLeft && `center`};
  align-items: ${props => props.iconLeft && `center`};
  cursor: pointer;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  @media ${device.ipad} {
    max-width: 300px;
  }
  border-radius: ${props =>
    props.borderRadius ? `${props.borderRadius}px` : '32px'};
  padding: 15px 0px 15px 0px;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '18px')};
  margin: ${props => (props.margin ? `${props.margin}px` : '0')};
  color: ${props => (props.color ? props.color : COLORS.white)};
  border: 2px solid
    ${props => (props.borderColor ? props.borderColor : COLORS.salmon)};
  background-color: ${props => (props.bgColor ? props.bgColor : COLORS.salmon)};
  font-weight: 700;
  font-family: 'Raleway';
  text-align: center;
  transition: filter ease-in-out 0.5s;
  &:hover {
    filter: brightness(0.9);
  }
  img {
    width: ${props => props.iconLeftSize && `${props.iconLeftSize}px`};
    margin-right: ${props => props.iconLeftSize && `25px`};
  }
`
export default ButtonPrimary
