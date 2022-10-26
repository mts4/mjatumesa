import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.roseLight};
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
    @media ${device.ipad} {
      max-width: 280px;
    }
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    @media ${device.ipad} {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .bgLeft {
    position: absolute;
    top: 40px;
    left: 0;
    width: 75px;
    height: 311px;
    @media ${device.ipad} {
      display: none;
    }
  }
  .bgRight {
    position: absolute;
    right: 0;
    width: 196px;
    height: 290px;
    @media ${device.ipad} {
      display: none;
    }
  }
`
export default Wrapper
