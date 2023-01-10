import IconTrash from '../../../assets/images/svg/icons/icon-trash.svg'
import IconEdit from '../../../assets/images/svg/icons/icon-edit.svg'
// Styles
import { CardAddress } from './styles'

const Address = () => {
  return (
    <CardAddress>
      <div className='card'>
        <div className='card__btns'>
          <img src={IconEdit} />
          <img src={IconTrash} />
        </div>
        <h5 className='card__title'>Puerto de palos 4975 B</h5>
        <p className='card__text'>Código postal 775000</p>
        <p className='card__text'>Las condes, RM de Santiago</p>
      </div>
      <div className='card'>
        <div className='card__btns'>
          <img src={IconEdit} />
          <img src={IconTrash} />
        </div>
        <h5 className='card__title'>Puerto de palos 4975 B</h5>
        <p className='card__text'>Código postal 775000</p>
        <p className='card__text'>Las condes, RM de Santiago</p>
      </div>
      <div className='card'>
        <div className='card__btns'>
          <img src={IconEdit} />
          <img src={IconTrash} />
        </div>
        <h5 className='card__title'>Puerto de palos 4975 B</h5>
        <p className='card__text'>Código postal 775000</p>
        <p className='card__text'>Las condes, RM de Santiago</p>
      </div>
    </CardAddress>
  )
}

export default Address
