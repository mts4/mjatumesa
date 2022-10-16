import TitleSection from '../../../molecules/TitleSection'
import Button from '../../../molecules/Button'
import ArrowScrollDown from '../../../molecules/ArrowScrollDown'
import Carousel from '../../../molecules/Carousel'
// Images
import bgPoints from '../../../../assets/images/svg/img/bg-points.svg'
import Slide1 from '../../../../assets/images/png/slider/slide1.png'
// import Slide2 from '../../../../assets/images/png/slider/slide2.png'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper from './styles'

const FourSection = () => {
  return (
    <Wrapper>
      <div className='blockLeft'>
        <TitleSection
          textFirst='Cocina cuando '
          colorTextFirst={COLORS.white}
          textSecond='quieras cocinar'
        />
        <p className='blockLeft__description'>
          En Cheffify nos preocupamos por ti, ya sea que pidas comida{' '}
          <strong>para un día</strong> o para <strong>toda una semana</strong>.
          Nosotros hacemos el trabajo duro, tú solo cocina el fin de semana para
          tus amigos o para esa cena tan especial.
        </p>
        <Button
          text='Hacer Pedido'
          bgColor={COLORS.salmon}
          color={COLORS.white}
          fontSize={17}
        />
      </div>
      <div className='blockRight'>
        <img src={bgPoints} className='blockRight__image' />
        <Carousel images={<Slide1 />} />
      </div>
      <ArrowScrollDown
        bgColor={COLORS.aqua}
        color={COLORS.white}
        customStyles={{
          top: 'auto',
          bottom: '-50px',
          left: 0,
          right: 0,
          margin: '0 auto',
        }}
      />
    </Wrapper>
  )
}

export default FourSection