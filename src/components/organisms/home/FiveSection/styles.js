import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${COLORS.white};
  border-radius: 20px;
  margin-top: 10rem;
  margin-bottom: 20px;
  .blockLeft {
    img {
      display: block;
      width: 450px;
    }
  }
  .blockRight {
    max-width: 569.18px;
    p {
      font-size: 19px;
      color: ${COLORS.violetDark};
      margin-top: 25px;
      line-height: 28px;
    }
  }
  .bgLeft {
    position: absolute;
    left: 0;
    width: 132px;
    height: 598px;
  }
  .bgRight {
    position: absolute;
    right: 0;
    bottom: -370px;
    width: 185px;
    height: 571px;
  }
`

export default Wrapper
