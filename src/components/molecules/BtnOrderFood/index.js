import Icon from 'cheffify-react-icons'
import { Link } from 'react-router-dom'
// Styles
import Button from './styles'

const BtnOrderFood = ({ text, bgColor, icon, iconColor, sizeIcon }) => {
  return (
    <Link to='/shop'>
      <Button bgColor={bgColor}>
        <Icon name={icon} size={sizeIcon} color={iconColor} />
        <p className='text'>{text}</p>
      </Button>
    </Link>
  )
}

export default BtnOrderFood
