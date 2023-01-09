import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'

const ControlsBox = styled.div`
  display: flex;
  border: 1px solid ${COLORS.salmon};
  height: 23px;
  margin-right: 5px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  max-width: 59px;
  margin-top: auto;
  margin-bottom: auto;
  .controlsBtn {
    background-color: ${COLORS.white};
    border: none;
    color: ${COLORS.salmon};
    font-size: 14px;
    cursor: pointer;
  }
  .controlsQuantityText {
    color: ${COLORS.salmon};
    font-size: 11px;
  }
`
export default ControlsBox
