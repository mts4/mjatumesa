import { createGlobalStyle } from 'styled-components'
import { device } from './media.querys'

const GlobalsStyles = createGlobalStyle`
.visible-desktop{
     display: block;
     @media ${device.ipad} {
          display: none;
     }
}

.visible-mobile{
     display: none;
     @media ${device.ipad} {
          display: block;
     }
}
.wrapper {
     padding: 40px 170px 30px 190px;
     @media (max-width: 1160px) {
          padding: 30px;
     }
     @media ${device.ipad} {
     padding: 11px 25px 11px 25px;
     }
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

export default GlobalsStyles
