// Svg
import IconDown from '../../../assets/images/svg/icons/icon-arrow-down.svg'
import Button from './styles'

const ButtonCircleDown = ({ customStyle }) => {
  return (
    <Button style={customStyle}>
      <img src={IconDown} />
    </Button>
  )
}

export default ButtonCircleDown
