import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  background-color: ${COLORS.aqua};
  padding-bottom: 60px;
  padding-top: 120px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  padding: 60px 23px 35px 80px;
  margin-bottom: 20px;
  @media (max-width: 1250px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media ${device.ipad} {
    flex-direction: column;
    padding: 30px 10px 10px 10px;
  }
  .blockLeft {
    max-width: 450px;
    margin-right: 20px;
    @media ${device.ipad} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      margin-right: 0px;
    }
    &__description {
      color: ${COLORS.white};
      margin-top: 40px;
      max-width: 425px;
      font-size: 19px;
      line-height: 30px;
      margin-bottom: 5rem;
      @media ${device.ipad} {
        margin-bottom: 1rem;
        max-width: 257px;
      }
    }
    a {
      width: 100%;
      text-align: center;
    }
  }
  .blockRight {
    &__image {
      width: 49px;
      height: 35px;
      margin-right: 10px;
      margin-bottom: 40px;
      float: right;
      @media ${device.ipad} {
        display: none;
      }
    }
    @media ${device.ipad} {
      margin-top: 70px;
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
    }
  }
  .customTitle {
    @media ${device.ipad} {
      text-align: center;
    }
  }
`

export default Wrapper
