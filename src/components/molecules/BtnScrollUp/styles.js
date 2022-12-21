import styled from 'styled-components'
// Utils
// import { COLORS } from '../../../theme/css/global.colors'

const Button = styled.button`
  position: fixed;
  background-color: red;
  cursor: pointer;
  z-index: 3;
  right: 170px;
  bottom: 10px;
  border: none;
  background: #d77466 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #d7746666;
  border-radius: 27px;
  width: 54px;
  height: 53px;
  opacity: 0.8;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 1;
  }
`
export default Button
