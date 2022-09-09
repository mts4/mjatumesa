import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.salmonLight};
  margin-top: 100px;
  .title {
    font-size: 42px;
    font-weight: 900;
    margin-top: 80px;
    color: ${COLORS.violetDark};
    margin-bottom: 20px;
    span {
      color: ${COLORS.salmon};
    }
  }
  .description {
    font-size: 19px;
    color: ${COLORS.violetDark};
    width: 100%;
    max-width: 570px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 30px;
  }
`
export default Wrapper
