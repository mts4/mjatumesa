import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Button = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 8px 16px 8px 15px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  justify-content: center;
  height: 16px;
  transition: opacity ease-in-out 0.3s;
  &:hover {
    opacity: 0.9;
  }
  .text {
    font-size: 12px;
    color: ${COLORS.white};
    padding-left: 10px;
  }
  .separator {
    height: 32px;
    width: 1px;
    background-color: ${COLORS.white};
    margin-left: 16px;
    margin-right: 20px;
  }
`
export default Button
