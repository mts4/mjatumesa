import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(212, 165, 148, 1);
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
  .bgLeft {
    position: absolute;
    top: 40px;
    left: 0;
    width: 75px;
    height: 311px;
  }
  .bgRight {
    position: absolute;
    right: 0;
    width: 196px;
    height: 290px;
  }
`
export default Wrapper
