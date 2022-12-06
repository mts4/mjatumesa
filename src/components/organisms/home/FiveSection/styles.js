import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  background-color: ${COLORS.white};
  border-radius: 20px;
  margin-top: 10rem;
  margin-bottom: 150px;
  @media ${device.ipad} {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 20px;
    margin-top: 70px;
    margin-bottom: 50px;
  }
  .blockLeft {
    max-width: 450px;
    width: 100%;
    img {
      width: 100%;
      @media ${device.ipad} {
        display: none;
      }
    }
  }
  .blockRight {
    max-width: 569.18px;
    @media ${device.ipad} {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      width: 100%;
    }
    p {
      font-size: 19px;
      color: ${COLORS.violetDark};
      margin-top: 25px;
      line-height: 28px;
    }
    &__image {
      margin-top: 10px;
      width: 263px;
      height: 59px;
    }
  }
  .bgLeft {
    position: absolute;
    left: 0;
    width: 132px;
    height: 598px;
    @media ${device.ipad} {
      display: none;
    }
  }
  .bgRight {
    position: absolute;
    right: 0;
    bottom: -370px;
    width: 185px;
    height: 571px;
    @media ${device.ipad} {
      display: none;
    }
  }
`

export default Wrapper
