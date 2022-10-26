import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
import { device } from '../../.../../../theme/css/media.querys'

const FooterBox = styled.div`
  hr {
    height: 81px;
    background-color: rgba(224, 224, 235, 1);
    border: none;
  }
  .footer {
    display: flex;
    flex-direction: column;
    padding: 55px 150px 40px 150px;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(224, 224, 235, 1);
      padding-bottom: 2rem;
      @media ${device.ipad} {
        flex-direction: column;
      }
      &-logo {
        width: 93px;
        height: 54px;
        @media ${device.ipad} {
          width: 126px;
          height: 73px;
          margin-bottom: 40px;
        }
      }
    }
    &__middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(224, 224, 235, 1);
      padding-top: 2rem;
      padding-bottom: 2rem;
      @media ${device.ipad} {
        flex-direction: column-reverse;
      }
      p {
        font-size: 12px;
        color: ${COLORS.grey};
      }
      &-rrss {
        display: flex;
        align-items: center;
        @media ${device.ipad} {
          flex-direction: column;
        }
        p {
          margin-right: 20px;
        }
        ul {
          display: flex;
          @media ${device.ipad} {
            margin-top: 20px;
            margin-bottom: 20px;
          }
          li {
            img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
              cursor: pointer;
              @media ${device.ipad} {
                width: 40px;
                height: 40px;
                margin-right: 10px;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
    &__bottom {
      padding-top: 2rem;
      padding-bottom: 2rem;
      p {
        font-size: 12px;
        color: ${COLORS.grey};
        span {
          color: ${COLORS.salmon};
          font-weight: 900;
        }
      }
      &-desktop {
        display: block;
        @media ${device.ipad} {
          display: none;
        }
      }
      &-mobile {
        display: none;
        @media ${device.ipad} {
          display: block;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`
export default FooterBox
