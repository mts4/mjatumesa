import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding-left: 20px;
  padding-right: 20px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 15px #d7746666;
    padding: 60px 90px 60px 90px;
    border-radius: 15px;

    &__description {
      margin-top: 25px;
      text-align: center;
      font-size: 19px;
      color: ${COLORS.turqoiseDark};
      width: 100%;
      max-width: 700px;
      line-height: 30px;
    }
    .cardContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 50px;
      @media ${device.ipad} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &__card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 270px;
        @media ${device.ipad} {
          margin-bottom: 20px;
        }
        &-image {
          width: 55px;
          height: 55px;
          margin-bottom: 20px;
        }
        &-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 35px;
          text-align: center;
        }
        &-text {
          text-align: center;
          font-size: 16px;
          line-height: 25px;
          font-weight: 300;
        }
      }
    }
  }
`

export default Wrapper
