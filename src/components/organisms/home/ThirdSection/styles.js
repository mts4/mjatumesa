import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.white};
  padding-bottom: 60px;
  padding-top: 120px;
  .bgLeft {
    position: absolute;
    top: 5rem;
    left: 0;
    width: 155px;
    height: 874px;
  }
  .bgRight {
    position: absolute;
    top: 5rem;
    right: 0;
    width: 300px;
    height: 963px;
  }
`
export const ItemsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 991px;
  margin-top: 50px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  img {
    width: 65px;
    height: 65px;
  }
  .text {
    text-align: center;
    color: ${COLORS.violetDark};
    width: 100%;
    max-width: 175px;
    font-size: 18px;
    margin-top: 25px;
  }
`

export default Wrapper
