import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const ButtonPrimary = styled.button`
  display: ${props => props.iconLeft && `flex`};
  justify-content: ${props => props.iconLeft && `center`};
  align-items: ${props => props.iconLeft && `center`};
  cursor: pointer;
  width: 100%;
  max-width: ${props => (props.width ? `${props.width}px` : '250px')};
  border-radius: 32px;
  padding: 20px 0px 20px 0px;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '18px')};
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
