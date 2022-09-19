import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px #d7746666;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color ease-in-out 0.5s;
  :hover {
    background-color: ${COLORS.salmonLight};
  }
  img {
    width: 24px;
    height: 12px;
  }
`
export default Button
