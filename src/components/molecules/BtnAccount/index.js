import Icon from '../../atoms/icon'
// Styles
import Button from './styles'

const BtnAccount = ({ text, iconLeft, iconRight, bgColor }) => {
  return (
    <Button bgColor={bgColor}>
      <Icon name={iconLeft} width={11} height={16} />
      <p className='text'>{text}</p>
      <div className='separator' />
      <Icon name={iconRight} width={17} height={12} />
    </Button>
  )
}

export default BtnAccount
