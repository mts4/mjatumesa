import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
// import { device } from '../../.../../../theme/css/media.querys'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 18px;
    color: ${COLORS.violetDark};
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
export default Form
