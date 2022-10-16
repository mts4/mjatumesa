import styled from 'styled-components'
// import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
    &__link {
      &-image {
        height: 30px;
        margin-right: 15px;
        margin-left: 15px;
      }
    }
  }
`

export default Wrapper
