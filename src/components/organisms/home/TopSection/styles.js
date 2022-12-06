import styled from 'styled-components'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${COLORS.white};
  justify-content: space-between;
  @media ${device.ipad} {
    flex-direction: column;
  }
  .blockLeft {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 620px;
    padding-left: 193px;
    padding-top: 120px;

    @media ${device.ipad} {
      padding: 11px 25px 11px 25px;
      max-width: 100%;
      width: auto;
    }
    &__description {
      color: ${COLORS.violetDark};
      font-size: 19px;
      line-height: 35px;
      margin-bottom: 80px;
      @media ${device.ipad} {
        margin-top: 20px;
        margin-bottom: 30px;
      }
      strong {
        font-weight: 600;
      }
      strong.important {
        color: ${COLORS.salmon};
      }

      .icon {
        position: absolute;
        width: 21px;
        height: 21px;
        margin-left: 20px;
      }
    }
    &__buttons {
      a {
        width: 100%;
      }
      button {
        margin: 0px 3px 0px 3px;
      }
      @media (max-width: 1280px) {
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 991px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  .blockRight {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    &__image {
      position: relative;
      display: block;
      margin-left: auto;
      margin-bottom: auto;
      max-width: 850px;
      width: 100%;
      @media (max-width: 991px) {
        display: none;
      }
    }
  }
`
export default Wrapper
