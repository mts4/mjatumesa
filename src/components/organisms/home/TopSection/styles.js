import styled from 'styled-components'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${COLORS.white};
  justify-content: space-between;
  .blockLeft {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 620px;
    padding-left: 193px;
    padding-top: 120px;
    &__title {
      width: 100%;
      max-width: 280px;
      color: ${COLORS.violetDark};
      margin-bottom: 25px;
      font-size: 42px;
      font-weight: 800;
      span {
        color: ${COLORS.salmon};
      }
    }
    &__description {
      color: ${COLORS.violetDark};
      font-size: 19px;
      line-height: 35px;
      margin-bottom: 80px;
      strong {
        font-weight: 600;
      }
      strong.important {
        color: ${COLORS.salmon};
      }

      .icon {
        position: absolute;
        width: 21px;
        height: 21px;
        margin-left: 20px;
      }
    }
  }
  .blockRight {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    &__image {
      position: relative;
      display: block;
      margin-left: auto;
      margin-bottom: auto;
      max-width: 850px;
      width: 100%;
    }
  }
`
export default Wrapper
