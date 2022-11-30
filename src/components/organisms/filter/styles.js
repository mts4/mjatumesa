import styled from 'styled-components'
// import ArrowDown from '../../../../assets/images/svg/icons/arrow-select.svg'
import { COLORS } from '../../../theme/css/global.colors'
import { device } from '../../../theme/css/media.querys'
// import { device } from '../../../../theme/css/media.querys'

const title = `
     color: ${COLORS.violetDark};
     font-size: 19px;
     font-weight: 600;
     font-family: 'Raleway', sans-serif;
`

const subTitle = `
     color: ${COLORS.violetDark};
     font-size: 15px;
     font-weight: 900;
     text-transform: uppercase;
     font-family: 'Raleway', sans-serif;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  @media ${device.ipad} {
    position: absolute;
    display: none;
    z-index: 2;
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 5px #d7746666;
    border: 0.5px solid #262c57;
    border-radius: 15px;
    padding: 0px 25px 25px 25px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    top: 97px;
  }
  .title {
    display: flex;
    align-items: center;
    padding-bottom: 29px;
    border-bottom: 1px solid ${COLORS.lightGrayBorderProduct};
    @media ${device.ipad} {
      display: none;
    }
    h5 {
      ${title};
      font-size: 19px;
      margin-left: 10px;
    }
  }
  .category {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid ${COLORS.lightGrayBorderProduct};
      margin-bottom: 20px;
      h5 {
        ${subTitle};
      }
    }
    &__buttons {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      button {
        background-color: transparent;
        border: none;
        color: ${COLORS.salmon};
        font-size: 15px;
        font-weight: normal;
        font-family: 'Raleway', sans-serif;
        margin-left: 5px;
        cursor: pointer;
      }
    }
    &__price {
      // Set styles input range
      .rc-slider {
        width: 80%;
        margin: 0 auto;
        .rc-slider-rail {
          background-color: ${COLORS.salmonLight};
        }
        .rc-slider-track {
          background-color: ${COLORS.violetDark};
        }
        .rc-slider-handle {
          background-color: ${COLORS.salmon};
          border: solid 2px ${COLORS.salmon};
          opacity: 1;
        }
        .rc-slider-handle:active {
          box-shadow: 0 0 5px ${COLORS.salmonLight};
        }
      }
      &-span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        span {
          color: ${COLORS.salmon};
          font-size: 15px;
        }
      }
    }
    &__checkbox {
      &-check {
        border: 1px solid ${COLORS.salmon};
      }
      label {
        color: ${COLORS.salmon};
        font-size: 15px;
        margin-left: 10px;
      }
    }
  }
`
export default Wrapper
