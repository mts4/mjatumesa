import Icon from 'cheffify-react-icons'
// Styles
import Wrapper from './styles'

const BtnAccount = ({
  text,
  bgColor,
  iconLeft,
  iconRight,
  iconColor,
  sizeIcon,
}) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Icon
        name={iconLeft}
        size={sizeIcon}
        color={iconColor}
        className='icon'
      />
      <p className='text'>{text}</p>
      <div className='separator' />
      <Icon
        name={iconRight}
        size={sizeIcon}
        color={iconColor}
        className='icon'
      />
    </Wrapper>
  )
}

export default BtnAccount
