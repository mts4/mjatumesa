import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
// import { device } from '../../.../../../theme/css/media.querys'

const Wrapper = styled.div`
  position: absolute;
  width: 301px;
  right: 170px;
  z-index: 2;
  box-shadow: 0px 0px 8px ${COLORS.shadowSalmon};
  background-color: ${COLORS.white};
  border-radius: 15px;
  padding: 16px;
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
      cursor: pointer;
      color: ${COLORS.white};
      border: none;
      border-radius: 6px;
      background-color: ${COLORS.salmon};
      font-weight: 500;
      margin-top: 20px;
      padding: 14px;
      width: 100%;
    }
    &__legal {
      color: ${COLORS.softGray};
      font-size: 8px;
      font-style: italic;
      margin-top: 7px;
    }
  }
`
export default Wrapper
