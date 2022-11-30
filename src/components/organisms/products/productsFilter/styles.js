import styled from 'styled-components'
import ArrowDown from '../../../../assets/images/svg/icons/arrow-select.svg'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  width: 100%;
  margin-left: 50px;
  @media ${device.ipad} {
    margin-left: 0px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${COLORS.lightGrayBorderProduct};
    @media ${device.ipad} {
      flex-direction: column;
      justify-content: center;
    }
    &__left {
      display: flex;
      align-items: center;
      width: 100%;
      @media ${device.ipad} {
        justify-content: center;
        margin-bottom: 20px;
      }
      h5 {
        font-size: 19px;
        color: ${COLORS.violetDark};
        margin-left: 10px;
      }
    }
    &__right {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      @media ${device.ipad} {
        justify-content: center;
      }
      &-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 17px;
        background-color: ${COLORS.lightGrayBorderProduct};
        width: 100%;
        max-width: 200px;
        height: 34px;
        font-size: 13px;
        font-family: 'Raleway';
        font-weight: 600;
        color: ${COLORS.violetDark};
        margin-right: 5px;
        p {
          margin-left: 10px;
        }
      }
      &-select {
        border: none;
        background-color: ${COLORS.lightGrayBorderProduct};
        border-radius: 17px;
        width: 100%;
        max-width: 200px;
        height: 34px;
        font-size: 12px;
        color: ${COLORS.violetDark};
        font-family: 'Raleway';
        font-weight: 600;
        padding: 0px 20px 0px 20px;
        appearance: none;
        background-image: url(${ArrowDown});
        background-size: 10px;
        background-repeat: no-repeat;
        background-position-x: 90%;
        background-position-y: center;
        @media ${device.ipad} {
          text-align: center;
        }
      }
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 35px;
    @media (max-width: 630px) {
      flex-direction: column;
      align-items: center;
    }
    .cardProduct {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
  .loadMore {
    display: flex;
    justify-content: center;
    align-items: center;
    &__btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      background-color: ${COLORS.white};
      border: 1px solid ${COLORS.violetDark};
      border-radius: 31px;
      padding: 25px;
      width: 100%;
      max-width: 259px;
      height: 100%;
      max-height: 60px;
      cursor: pointer;
      &-text {
        font-size: 22px;
        color: ${COLORS.violetDark};
        font-family: 'Raleway';
        font-weight: 600;
      }
      &-icon {
        font-style: normal;
        font-size: 30px;
      }
    }
  }
`
export default Wrapper
