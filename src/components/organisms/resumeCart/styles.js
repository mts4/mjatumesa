import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
// import { device } from '../../.../../../theme/css/media.querys'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px ${COLORS.shadowSalmon};
  border-radius: 15px;
  height: 100%;
  .head {
    padding: 20px;
    &__title {
      font-size: 19px;
      font-weight: bold;
      margin-bottom: 18px;
      color: ${COLORS.violetDark};
    }
  }
  .products {
    display: flex;
    margin-bottom: 14px;
    align-items: center;
    &__image {
      width: 60px;
      border-radius: 10px;
      margin-right: 14px;
    }
    &__info {
      display: flex;
      margin-right: 120px;
      &-name {
        font-size: 13px;
        font-weight: bold;
        max-width: 130px;
        color: ${COLORS.violetLight};
      }
      &-quantity {
        font-size: 12px;
        color: ${COLORS.salmonText};
        margin-top: 5px;
      }
    }
    &__price {
      display: flex;
      align-items: center;
      margin-left: auto;
      &-text {
        font-size: 15px;
        font-weight: bold;
        color: ${COLORS.aqua};
      }
    }
  }
  .subtotal {
    padding: 20px;
    border-top: 1px solid ${COLORS.lightGray};
    border-bottom: 1px solid ${COLORS.lightGray};
    &__box {
      display: flex;
      justify-content: space-between;
      &-title,
      &-text {
        color: ${COLORS.grey};
        font-size: 17px;
        font-weight: bold;
      }
      &-txt {
        color: ${COLORS.softGray};
        font-size: 14px;
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    &__text {
      font-size: 15px;
      color: ${COLORS.grey};
      font-weight: bold;
    }
    &__total {
      font-size: 20px;
      font-weight: bold;
      color: ${COLORS.aqua};
    }
  }
`
export default Wrapper
