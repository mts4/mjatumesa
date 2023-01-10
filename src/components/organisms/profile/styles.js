import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
// import { device } from '../../../../theme/css/media.querys'

const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .profileImage {
    width: 55px;
  }
  .blockInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 15px;

    &__container {
      display: flex;
      margin-bottom: 10px;
      &-name {
        font-size: 17px;
        font-weight: bold;
        color: ${COLORS.violetDark};
        margin-right: 10px;
      }
      &-inputName {
        font-size: 17px;
        font-weight: bold;
        color: ${COLORS.violetDark};
        font-family: 'Raleway';
        border: none;
        outline: none;
      }
      &-inputInfo {
        font-size: 12px;
        color: ${COLORS.violetDark};
        font-family: 'Raleway';
        border: none;
        outline: none;
      }
      &-icon {
        cursor: pointer;
        width: 13px;
        height: 13px;
      }
      &-txt {
        font-size: 12px;
        color: ${COLORS.violetDark};
        margin-right: 10px;
      }
    }
  }
`

export const Table = styled.div`
  .row {
    display: flex;
    justify-content: center;
    &__title {
      width: 100%;
      max-width: 230px;
      display: flex;
      align-items: center;
      height: 70px;
      justify-content: center;
      font-size: 14px;
      color: ${COLORS.salmon};
      font-family: 'Raleway';
      font-weight: bold;
      border-bottom: 1px solid ${COLORS.lightGrayBorderProduct};
      text-align: center;
    }
    &__content {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      max-width: 690px;
      &-info {
        display: flex;
        width: 100%;
        justify-content: center;
        &-txt {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 230px;
          height: 70px;
          color: ${COLORS.violetDark};
          font-weight: bold;
          border-bottom: 1px solid ${COLORS.lightGrayBorderProduct};
          justify-content: center;
          font-size: 14px;
          button {
            cursor: pointer;
            padding: 0px;
            margin: 0px;
            background-color: ${COLORS.salmon};
            border: none;
            font-size: 11px;
            font-family: 'Raleway';
            color: ${COLORS.white};
            padding: 6px 18px 6px 18px;
            border-radius: 12px;
            margin-left: auto;
          }
        }
      }
      &-accordion {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
        transition: all ease-in-out 0.5s;
        overflow: hidden;
        .box {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          &__left {
            display: flex;
            align-items: center;
            img {
              width: 50px;
              border-radius: 10px;
            }
            p {
              margin-left: 12px;
              font-size: 12px;
              font-weight: bold;
              color: ${COLORS.violetLight};
            }
          }
          &__right {
            p {
              font-size: 14px;
              font-weight: bold;
              color: ${COLORS.aqua};
            }
          }
        }
        &-btn {
          background-color: ${COLORS.aqua};
          margin-top: 13px;
          width: 100%;
          max-width: 200px;
          margin-left: auto;
          color: ${COLORS.white};
          font-family: 'Raleway';
          font-weight: bold;
          font-size: 14px;
          border: none;
          border-radius: 6px;
          padding: 12px 40px 12px 40px;
          cursor: pointer;
        }
      }
    }
  }
`

export const ButtonsSwitch = styled.div`
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 35px;
    background-color: ${COLORS.lightGrayBorderProduct};
    width: 100%;
    max-width: 350px;
    border-radius: 9px;
    padding: 5px;
    &__btn {
      border: none;
      color: ${COLORS.grey};
      cursor: pointer;
      font-family: 'Raleway';
      font-weight: bold;
      font-size: 16px;
      padding: 8px 30px 8px 30px;
      border-radius: 9px;
      background-color: ${COLORS.lightGrayBorderProduct};
    }
    &__btn.active {
      background-color: ${COLORS.white};
      color: ${COLORS.violetDark};
    }
  }
`
export const CardAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  .card {
    position: relative;
    background: ${COLORS.white} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 8px #d7746666;
    border-radius: 15px;
    width: 100%;
    max-width: 350px;
    padding: 31px 0px 31px 31px;
    &__btns {
      position: absolute;
      top: 20px;
      right: 20px;
      img {
        width: 15px;
        cursor: pointer;
        margin: 3px;
      }
    }
    &__title {
      font-size: 16px;
      color: ${COLORS.violetDark};
      margin-bottom: 13px;
    }
    &__text {
      font-size: 13px;
      color: ${COLORS.violetDark};
      margin-bottom: 5px;
    }
  }
`
export default ContainerInfo
