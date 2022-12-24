import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
import { device } from '../../.../../../theme/css/media.querys'

const Wrapper = styled.div`
  position: absolute;
  width: 301px;
  right: 170px;
  z-index: 2;
  box-shadow: 0px 0px 8px ${COLORS.shadowSalmon};
  background-color: ${COLORS.white};
  border-radius: 15px;
  padding: 16px;
  @media ${device.ipad} {
    width: 80%;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  .title {
    font-size: 15px;
    text-align: center;
    color: ${COLORS.violetDark};
    margin-bottom: 20px;
  }
  .body {
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8ef;
    .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      &__image {
        display: flex;
        margin-right: 5px;
        width: 100%;
        max-width: 156px;
        &-img {
          width: 45px;
          height: 45px;
          border-radius: 10px;
        }
      }
      &__info {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        &-title {
          font-size: 11px;
          color: ${COLORS.violetLight};
        }
        &-quantity {
          color: ${COLORS.salmon};
          font-size: 10px;
        }
      }
      &__delete {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
        }
      }
      &__controls {
        display: flex;
        border: 1px solid ${COLORS.salmon};
        height: 23px;
        margin-right: 5px;
        margin-left: 5px;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 1px;
        width: 100%;
        max-width: 59px;
        margin-top: auto;
        margin-bottom: auto;
        &-btn {
          background-color: ${COLORS.white};
          border: none;
          color: ${COLORS.salmon};
          font-size: 14px;
          cursor: pointer;
        }
        &-quantityText {
          color: ${COLORS.salmon};
          font-size: 11px;
        }
      }
      &__price {
        margin-top: auto;
        margin-bottom: auto;
        color: ${COLORS.aqua};
        font-size: 12px;
        font-weight: 900;
      }
    }
  }
  .footer {
    padding-top: 10px;
    &__delivery {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-text,
      &-price {
        font-weight: 900;
        font-size: 11px;
        color: ${COLORS.softGray};
      }
    }
    &__total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      &-text {
        font-weight: 900;
        font-size: 13px;
        color: ${COLORS.violetDark};
      }

      &-price {
        font-weight: 900;
        font-size: 13px;
        color: ${COLORS.aqua};
      }
    }
    &__btnShop {
      display: block;
      color: ${COLORS.white};
      border-radius: 6px;
      background-color: ${COLORS.salmon};
      font-weight: bold;
      padding: 14px;
      font-family: 'Raleway';
      font-size: 14px;
      text-align: center;
      margin-top: 17px;
    }
    &__legal {
      color: ${COLORS.softGray};
      font-size: 8px;
      font-style: italic;
      margin-top: 7px;
    }
  }
  .notHaveProducts {
    display: flex;
    justify-content: center;
    p {
      text-align: center;
      font-size: 18px;
      color: ${COLORS.violetDark};
    }
  }
`
export default Wrapper
