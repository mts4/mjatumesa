// Svg
import ArrowUp from '../../../assets/images/svg/icons/arrow-up.svg'
// Styles
import Button from './styles'

const BtnScrollUp = () => {
  const handleClickScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Button onClick={() => handleClickScrollUp()}>
      <img src={ArrowUp} alt='Icono flecha para arriba' />
    </Button>
  )
}

export default BtnScrollUp
