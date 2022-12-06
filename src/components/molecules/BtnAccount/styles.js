import styled from 'styled-components'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 8px 16px 8px 15px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  justify-content: center;
  height: 16px;
  transition: opacity ease-in-out 0.3s;
  @media (max-width: 991px) {
    background-color: transparent;
    padding: 8px 0px 8px 0px;
    height: 20px;
  }
  &:hover {
    opacity: 0.9;
  }
  .text {
    font-size: 12px;
    color: ${COLORS.white};
    padding-left: 10px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .separator {
    height: 32px;
    width: 1px;
    background-color: ${COLORS.white};
    margin-left: 16px;
    margin-right: 20px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .icon {
    @media (max-width: 991px) {
      background-color: ${props => props.bgColor};
      padding: 8px;
      border-radius: 50%;
      margin-left: 8px;
    }
  }

  .notification {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.white};
    background-color: ${COLORS.salmon};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    font-size: 9px;
    margin-left: 5px;
    padding: 2px;
  }
`
export default Wrapper
