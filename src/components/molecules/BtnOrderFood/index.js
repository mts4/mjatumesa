import Icon from 'cheffify-react-icons'
// Styles
import Button from './styles'

const BtnOrderFood = ({ text, bgColor, icon, iconColor, sizeIcon }) => {
  return (
    <Button bgColor={bgColor}>
      <Icon name={icon} size={sizeIcon} color={iconColor} />
      <p className='text'>{text}</p>
    </Button>
  )
}

export default BtnOrderFood
