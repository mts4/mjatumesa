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
  padding-bottom: 120px;
  padding-top: 100px;
  .description {
    font-size: 19px;
    color: ${COLORS.violetDark};
    width: 100%;
    max-width: 570px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 60px;
    margin-top: 30px;
  }
  .products {
    display: flex;
  }
`
export default Wrapper
