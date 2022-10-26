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
`

export default GlobalsStyles
