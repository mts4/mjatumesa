import styled from 'styled-components'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 620px;
  background-color: ${COLORS.white};
  padding-left: 193px;
  .blockLeft {
    display: flex;
    flex-direction: column;
    &__title {
      width: 100%;
      max-width: 280px;
      color: ${COLORS.violetDark};
      margin-bottom: 25px;
      font-size: 42px;
      span {
        color: ${COLORS.salmon};
      }
    }
    &__description {
      color: ${COLORS.violetDark};
      font-size: 19px;
      line-height: 25px;
      margin-bottom: 60px;
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
`
export default Wrapper
