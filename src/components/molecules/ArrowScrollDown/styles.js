import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -50px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : COLORS.salmonLight};
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: pointer;
  .icon {
    width: 30px;
    height: 30px;
  }
`
export default Arrow
