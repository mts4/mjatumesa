import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  margin-top: 60px;

  .somosBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
    @media ${device.ipad} {
      flex-direction: column;
    }
    &__card {
      box-shadow: 0px 0px 8px #d7746666;
      border-radius: 15px;
      width: 100%;
      max-width: 346px;
      padding: 40px;
      min-height: 258px;
      @media (max-width: 1675px) {
        margin: 15px;
      }
      @media (max-width: 1200px) {
        min-height: 380px;
      }
      @media ${device.ipad} {
        margin-bottom: 20px;
        max-width: 270px;
        min-height: auto;
      }
      &-img {
        width: 45px;
        height: 47px;
        margin-bottom: 23px;
      }
      &-title {
        font-size: 18px;
        margin-bottom: 12px;
        color: ${COLORS.violetDark};
      }
      &-text {
        font-size: 13px;
        color: ${COLORS.violetDark};
        line-height: 25px;
      }
    }
  }
`
export default Wrapper
