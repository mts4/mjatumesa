import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1110px;
  background-color: ${COLORS.aqua};
  padding-bottom: 60px;
  padding-top: 120px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  padding: 60px 23px 35px 80px;
  margin-bottom: 20px;
  .blockLeft {
    max-width: 450px;
    &__description {
      color: ${COLORS.white};
      margin-top: 40px;
      max-width: 425px;
      font-size: 19px;
      line-height: 30px;
      margin-bottom: 5rem;
    }
  }
  .blockRight {
    img {
      width: 49px;
      height: 35px;
      margin-right: 10px;
    }
  }
`

export default Wrapper
