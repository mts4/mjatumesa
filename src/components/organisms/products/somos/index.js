// Molecules
import TitleSection from '../../../molecules/TitleSection'
// SVG
import iconTrigo from '../../../../assets/images/svg/icons/icon-trigo.svg'
// Styles
import Wrapper from './styles'

const Somos = () => {
  return (
    <Wrapper>
      <TitleSection textFirst='Somos ' textSecond='Cheffify' fontSize={27} />
      <div className='somosBox'>
        <CardSomos
          title='Los mejores ingredientes'
          description='En Cheffify nos preocupamos por tu salud y la de los tuyos, por eso ponemos todo nuestro empeño en adquirir los mejores productos de proveedores comprometidos y con nuestra misma visión.'
        />
        <CardSomos
          title='Nuestros Chefs'
          description='Trabajamos con profesionales que llevan a nuestro lado más de una década, personas que más que trabajadores, ya son familia. Ponemos nuestra mano en el “fogón” por ellos.'
        />
        <CardSomos
          title='Directo a tu casa'
          description='La eficiencia de nuestros envases respeta la cadena de frío para asegurarnos de que todos nuestros productos lleguen en buen estado a la mesa de tu casa (o allá donde estés).'
        />
      </div>
    </Wrapper>
  )
}

export default Somos

export const CardSomos = ({ title, description }) => {
  return (
    <div className='somosBox__card'>
      <img
        src={iconTrigo}
        alt='Icono de somos'
        className='somosBox__card-img'
      />
      <h5 className='somosBox__card-title'>{title}</h5>
      <p className='somosBox__card-text'>{description}</p>
    </div>
  )
}
