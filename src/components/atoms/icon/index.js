import * as icons from '../../../assets/images/svg/icons'
// Styles
import Icono from './styles'

const Icon = ({ name, width, height, color }) => {
  const icon = icons[`${name}Icon`]
  return (
    <Icono
      src={icon}
      alt={`Icono de ${name}`}
      width={width}
      height={height}
      color={color}
    />
  )
}

export default Icon
