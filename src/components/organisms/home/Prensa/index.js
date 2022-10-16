import TitleSection from '../../../molecules/TitleSection'
// Images
import LaTercera from '../../../../assets/images/svg/prensa/latercera.svg'
import Ed from '../../../../assets/images/svg/prensa/ed.svg'
import Elservirsen from '../../../../assets/images/svg/prensa/elservirsen.svg'
import MesaMantel from '../../../../assets/images/svg/prensa/mesamantel.svg'
// Styles
import Wrapper from './styles'

const Prensa = () => {
  return (
    <Wrapper>
      <TitleSection
        textFirst='Ademas de dar de comer,'
        textSecond='damos de qué hablar.'
        lineBreak={true}
        textAlign={true}
      />
      <div className='container'>
        <a
          href='https://finde.latercera.com/comer/mjb-a-tu-mesa-delivery-cocina-rica-sano/'
          target='_blank'
          rel='noopener noreferrer'
          className='container__link'
        >
          <img src={LaTercera} className='container__link-image' />
        </a>
        <a
          href='https://www.instagram.com/elservirsen/?hl=es-la/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Ed} className='container__link-image' />
        </a>
        <a
          href='https://www.instagram.com/elservirsen/?hl=es-la/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Elservirsen} className='container__link-image' />
        </a>
        <a
          href='https://www.instagram.com/elservirsen/?hl=es-la'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={MesaMantel} className='container__link-image' />
        </a>
      </div>
    </Wrapper>
  )
}

export default Prensa
