import styled from 'styled-components'
import ArrowDown from '../../../../assets/images/svg/icons/arrow-select.svg'
import { COLORS } from '../../../../theme/css/global.colors'
// import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  width: 100%;
  margin-left: 50px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${COLORS.lightGrayBorderProduct};
    &__left {
      display: flex;
      align-items: center;
      h5 {
        font-size: 19px;
        color: ${COLORS.violetDark};
      }
    }
    &__right {
      &-select {
        border: none;
        background-color: ${COLORS.lightGrayBorderProduct};
        border-radius: 17px;
        width: 100%;
        max-width: 150px;
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
      }
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 35px;
    .cardProduct {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`
export default Wrapper
