import styled from 'styled-components'
import { device } from '../../../theme/css/media.querys'

const Wrapper = styled.div`
  padding: 40px 170px 30px 190px;
  @media (max-width: 1160px) {
    padding: 40px 30px 30px 100px;
  }
  @media ${device.ipad} {
    padding: 11px 25px 11px 25px;
  }
`

export default Wrapper
