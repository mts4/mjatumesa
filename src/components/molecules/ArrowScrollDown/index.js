// Svg
import ArrowDown from '../../../assets/images/svg/icons/icon-arrow-down.svg'
// Styles
import Arrow from './styles'

const ArrowScrollDown = ({ bgColor }) => {
  return (
    <Arrow bgColor={bgColor}>
      <img src={ArrowDown} alt='Icon arrow to down' className='icon' />
    </Arrow>
  )
}

export default ArrowScrollDown
