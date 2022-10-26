import styled from 'styled-components'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media ${device.ipad} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__link {
      @media ${device.ipad} {
        margin-bottom: 30px;
      }
      &-image {
        height: 30px;
        margin-right: 15px;
        margin-left: 15px;
      }
    }
  }
`

export default Wrapper
