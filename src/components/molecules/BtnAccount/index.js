import Icon from 'cheffify-react-icons'
// Styles
import Button from './styles'

const BtnAccount = ({
  text,
  bgColor,
  iconLeft,
  iconRight,
  iconColor,
  sizeIcon,
}) => {
  return (
    <Button bgColor={bgColor}>
      <Icon name={iconLeft} size={sizeIcon} color={iconColor} />
      <p className='text'>{text}</p>
      <div className='separator' />
      <Icon name={iconRight} size={sizeIcon} color={iconColor} />
    </Button>
  )
}

export default BtnAccount
