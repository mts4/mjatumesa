import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -50px;
  background-color: ${COLORS.salmonLight};
  height: 100px;
  width: 100px;
  border-radius: 50%;
  /* &::before {
    position: absolute;
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    left: -15px;
    top: 20px;
    background: linear-gradient(to left, #ff0000 50%, #fff 50%);
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  } */
  .icon {
    width: 30px;
    height: 30px;
  }
`
export default Arrow
