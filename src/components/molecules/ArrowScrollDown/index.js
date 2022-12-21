// Icons
import Icon from 'cheffify-react-icons'
// Styles
import Arrow from './styles'

const ArrowScrollDown = ({ bgColor, color, customStyles, sectionId }) => {
  const handleClickScroll = () => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Arrow
      bgColor={bgColor}
      style={customStyles && customStyles}
      onClick={() => handleClickScroll()}
    >
      <Icon name='angle-down' size={30} color={color} />
    </Arrow>
  )
}

export default ArrowScrollDown
