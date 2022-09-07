import Icon from '../../atoms/icon'
// Styles
import Button from './styles'

const BtnOrderFood = ({ text, icon, iconColor, bgColor }) => {
  return (
    <Button bgColor={bgColor}>
      <Icon name={icon} width={15} height={11} color={iconColor} />
      <p className='text'>{text}</p>
    </Button>
  )
}

export default BtnOrderFood
