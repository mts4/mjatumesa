import styled from 'styled-components'
import ArrowDown from '../../../../assets/images/svg/icons/arrow-select.svg'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 260px;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 15px #d7746666;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 70px;
  margin-right: 13px;
  margin-left: 13px;
  z-index: 1;
  @media ${device.ipad} {
    margin-bottom: 26px;
  }
  .cardProduct {
    &__header {
      display: flex;
      @media ${device.mobileS} {
        flex-direction: row;
        margin-bottom: 20px;
      }
      @media ${device.tablet} {
        flex-direction: column;
        margin-bottom: 0px;
      }
    }
    &__cover {
      display: block;
      width: 100%;
      &-image {
        border-radius: 15px;
        @media ${device.mobileS} {
          width: 111px;
          height: 110px;
          margin-right: 15px;
        }
        @media ${device.tablet} {
          width: 100%;
          margin-right: 0px;
          height: auto;
        }
      }
    }
    &__attributes {
      display: flex;
      flex-direction: column;
      padding-left: 7px;
      padding-right: 7px;
      margin-top: 10px;
      &-title {
        font-size: 18px;
        color: ${COLORS.violetLight};
      }
      &-description {
        color: ${COLORS.grey};
        font-size: 12px;
        margin-top: 7px;
        height: 80px;
      }
    }
    &__sizePeople {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 7px;
      padding-right: 7px;
      &-price {
        color: ${COLORS.violetDark};
        font-size: 19px;
        font-weight: bold;
      }
      &-select {
        width: 100%;
        background-color: ${COLORS.lightGray};
        border: none;
        padding: 7px 20px 7px 20px;
        border-radius: 5px;
        color: ${COLORS.grey};
        font-size: 12px;
        appearance: none;
        background-image: url(${ArrowDown});
        background-size: 10px;
        background-repeat: no-repeat;
        background-position-x: 90%;
        background-position-y: center;
        @media ${device.mobileS} {
          max-width: 165px;
        }
        @media ${device.tablet} {
          max-width: 120px;
        }
      }
    }
    &__controlsBox {
      display: flex;
      margin-top: 15px;
      padding-left: 7px;
      padding-right: 7px;
      &-quantity {
        display: flex;
        align-items: center;
        border-radius: 5px;
        border: 1px solid ${COLORS.salmon};
        &-number {
          padding: 10px 20px 10px 20px;
          border-right: 1px solid ${COLORS.salmon};
          color: ${COLORS.salmon};
          font-size: 17px;
          font-weight: bold;
        }
        &-controls {
          display: flex;
          flex-direction: column;
          justify-content: center;
          &-btn {
            background-color: transparent;
            border: none;
            color: ${COLORS.salmon};
            cursor: pointer;
          }
        }
      }
      &-btnAdd {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: none;
        color: ${COLORS.white};
        border-radius: 5px;
        background-color: ${COLORS.salmon};
        width: 100%;
        margin-left: 7px;
        font-family: 'Raleway';
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
`
export default Card
