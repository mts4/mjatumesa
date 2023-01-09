// Uitls
import ProfileCover from '../../../assets/images/svg/img/persona2.svg'
// Styles
import ContainerInfo from './styles'

const InformationPersonal = () => {
  return (
    <ContainerInfo>
      <img src={ProfileCover} className='profileImage' />
      <div className='blockInfo'>
        <div className='blockInfo__container'>
          <p className='blockInfo__container-name'>Moisés Andrade</p>
          <p>Icon</p>
        </div>
        <div className='blockInfo__container'>
          <p className='blockInfo__container-txt'>moises.ao@gmail.com</p>
          <p>Icon</p>
        </div>
        <div className='blockInfo__container'>
          <p className='blockInfo__container-txt'>979868082</p>
          <p>Icon</p>
        </div>
      </div>
    </ContainerInfo>
  )
}

export default InformationPersonal
