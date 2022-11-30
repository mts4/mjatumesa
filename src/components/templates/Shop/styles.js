import styled from 'styled-components'
import { device } from '../../../theme/css/media.querys'

const Wrapper = styled.div`
  padding: 40px 170px 30px 190px;
  @media (max-width: 1160px) {
    padding: 30px;
  }
  @media ${device.ipad} {
    padding: 11px 25px 11px 25px;
  }

  .container {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    @media ${device.ipad} {
      flex-direction: column;
    }
  }
`

export default Wrapper
