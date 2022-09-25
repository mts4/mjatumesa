// Svg
import Icon from 'cheffify-react-icons'
// Styles
import Arrow from './styles'

const ArrowScrollDown = ({ bgColor, color, customStyles }) => {
  return (
    <Arrow bgColor={bgColor} style={customStyles && customStyles}>
      <Icon name='angle-down' size={30} color={color} />
    </Arrow>
  )
}

export default ArrowScrollDown
