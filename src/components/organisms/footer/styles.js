import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'

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
      &-logo {
        width: 93px;
        height: 54px;
      }
    }
    &__middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(224, 224, 235, 1);
      padding-top: 2rem;
      padding-bottom: 2rem;
      p {
        font-size: 12px;
        color: ${COLORS.grey};
      }
      &-rrss {
        display: flex;
        align-items: center;
        p {
          margin-right: 20px;
        }
        ul {
          display: flex;
          li {
            img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
              cursor: pointer;
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
    }
  }
`
export default FooterBox
