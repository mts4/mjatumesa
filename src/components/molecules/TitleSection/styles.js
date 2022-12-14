import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'
import { device } from '../../../theme/css/media.querys'

const Title = styled.h2`
  font-size: ${props => (props.fontSize ? props.fontSize : `${42}px`)};
  @media ${device.ipad} {
    font-size: ${props => (props.fontSize ? props.fontSize : `${30}px`)};
  }
  font-weight: 900;
  color: ${props =>
    props.colorTextFirst ? props.colorTextFirst : COLORS.violetDark};
  text-align: ${props => (props.textAlign ? props.textAlign : 'initial')};

  span {
    color: ${COLORS.salmon};
  }
`
export default Title
