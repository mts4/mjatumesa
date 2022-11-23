import Button from '../../../molecules/Button'
// Images
import EmoteLove from '../../../../assets/images/svg/icons/emote-love.svg'
import TopSectionImage from '../../../../assets/images/svg/img/top-section-image.svg'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper from './styles'
import { Link } from 'react-router-dom'
const TopSection = () => {
  return (
    <Wrapper>
      <div className='blockLeft'>
        <h1 className='blockLeft__title'>
          Come como <span>en casa</span>
        </h1>
        <p className='blockLeft__description'>
          Platos de primera, cocinados de manera artesanal con productos
          seleccionados,{' '}
          <strong className='important'>sin aditivos ni conservantes</strong>.
          Recibe nuestra comida directamente en tu casa.{' '}
          <strong>¡Garantía de calidad!</strong>
          <img src={EmoteLove} alt='Icono emote Love' className='icon' />
        </p>
        <div className='blockLeft__buttons'>
          <Link to='/shop'>
            <Button
              text='Hacer pedido'
              fontSize={17}
              color={COLORS.white}
              bgColor={COLORS.salmon}
              width={240}
              borderColor={COLORS.salmon}
              margin={5}
            />
          </Link>
          <Button
            text='Saber más'
            fontSize={17}
            color={COLORS.salmon}
            bgColor={COLORS.white}
            width={240}
            borderColor={COLORS.salmon}
            margin={5}
          />
        </div>
      </div>
      <div className='blockRight'>
        <img
          src={TopSectionImage}
          alt='Image top Section'
          className='blockRight__image'
        />
      </div>
    </Wrapper>
  )
}

export default TopSection
