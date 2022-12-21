import TitleSection from '../../../molecules/TitleSection'
// Images
import Person1 from '../../../../assets/images/svg/img/persona1.svg'
import Person2 from '../../../../assets/images/svg/img/persona2.svg'
import Person3 from '../../../../assets/images/svg/img/persona3.svg'
// Styles
import Wrapper from './styles'

const FeedBack = () => {
  return (
    <Wrapper id='feedback'>
      <div className='container'>
        <TitleSection
          textFirst='Guatita llena, '
          textSecond='cliente contento.'
        />
        <p className='container__description'>
          Porque sabemos lo importante de tener referencias, no hay mejor aval
          que la opinión de nuestros clientes. Aquí verás algunos de sus
          comentarios.
        </p>
        <div className='cardContainer'>
          <div className='cardContainer__card'>
            <img src={Person1} className='cardContainer__card-image' />
            <h5 className='cardContainer__card-title'>Andrea Castillo</h5>
            <p className='cardContainer__card-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              consectetur et. Laudantium, quidem delectus!
            </p>
          </div>
          <div className='cardContainer__card'>
            <img src={Person2} className='cardContainer__card-image' />
            <h5 className='cardContainer__card-title'>Andrea Castillo</h5>
            <p className='cardContainer__card-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              consectetur et. Laudantium, quidem delectus!
            </p>
          </div>
          <div className='cardContainer__card'>
            <img src={Person3} className='cardContainer__card-image' />
            <h5 className='cardContainer__card-title'>Andrea Castillo</h5>
            <p className='cardContainer__card-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              consectetur et. Laudantium, quidem delectus!
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default FeedBack
