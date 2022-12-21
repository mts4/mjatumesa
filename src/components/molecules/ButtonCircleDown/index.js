// Svg
import IconDown from '../../../assets/images/svg/icons/icon-arrow-down.svg'
import Button from './styles'

const ButtonCircleDown = ({ customStyle, sectionId }) => {
  const handleClickScroll = () => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Button style={customStyle} onClick={() => handleClickScroll()}>
      <img src={IconDown} />
    </Button>
  )
}

export default ButtonCircleDown
