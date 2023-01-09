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
      &-name {
        font-size: 17px;
        font-weight: bold;
        color: ${COLORS.violetDark};
        margin-right: 10px;
      }
      &-name {
        font-size: 17px;
        font-weight: bold;
        color: ${COLORS.violetDark};
        margin-right: 10px;
      }
      &-txt {
        font-size: 12px;
        color: ${COLORS.violetDark};
        margin-right: 10px;
      }
    }
  }
`
export default ContainerInfo
