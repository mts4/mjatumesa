import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Menu = styled.div`
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 170px 30px 190px;
    background-color: ${COLORS.white};
    @media (max-width: 1160px) {
      padding: 40px 30px 30px 100px;
    }
    @media (max-width: 991px) {
      flex-direction: column;
      padding: 30px;
    }
    &__logo {
      width: 100%;
      max-width: 116px;
    }
    &__links {
      display: flex;
      &-contain {
        display: flex;
        align-items: center;
        margin-left: 45px;
        cursor: pointer;
        &--txt {
          color: ${COLORS.violetDark};
          font-size: 12px;
          padding-left: 6px;
        }
      }
    }
    &__btns {
      display: flex;
      justify-content: space-evenly;
    }
    // Elements Absolute
    &__elementsAbsolute {
      position: absolute;
      left: 0;
      @media (max-width: 991px) {
        display: none;
      }
      &-img {
        width: 88px;
        height: 167px;
      }
    }
  }
`
export default Menu
