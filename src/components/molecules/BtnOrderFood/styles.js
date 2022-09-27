import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 32px 8px 25px;
  border-radius: 16px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  justify-content: center;
  margin-right: 10px;
  height: 16px;
  transition: opacity ease-in-out 0.3s;
  @media (max-width: 991px) {
    height: 20px;
    width: 20px;
    padding: 8px;
    border-radius: 50%;
    margin-right: 0px;
  }
  &:hover {
    opacity: 0.9;
  }
  .text {
    font-size: 12px;
    color: ${COLORS.white};
    padding-left: 10px;

    @media (max-width: 991px) {
      display: none;
    }
  }
`
export default Button
