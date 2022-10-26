import Icon from 'cheffify-react-icons'
import imageFood from '../../../../assets/images/jpg/food/charquican.jpg'
// Styles
import Card from './styles'

const ProductCard = () => {
  return (
    <Card className='cardProduct'>
      <div className='cardProduct__header'>
        <div className='cardProduct__cover'>
          <img src={imageFood} className='cardProduct__cover-image' />
        </div>
        <div className='cardProduct__attributes'>
          <h5 className='cardProduct__attributes-title'>Charquican</h5>
          <p className='cardProduct__attributes-description'>
            Exquisito Guiso de charqui con porotos, papas, zapallo y otras
            legumbres.
          </p>
        </div>
      </div>
      <div className='cardProduct__sizePeople'>
        <span className='cardProduct__sizePeople-price'>$3.550</span>
        <select className='cardProduct__sizePeople-select'>
          <option value=''>4 Personas</option>
        </select>
      </div>
      <div className='cardProduct__controlsBox'>
        <div className='cardProduct__controlsBox-quantity'>
          <span className='cardProduct__controlsBox-quantity-number'>1</span>
          <div className='cardProduct__controlsBox-quantity-controls'>
            <button className='cardProduct__controlsBox-quantity-controls-btn'>
              +
            </button>
            <button className='cardProduct__controlsBox-quantity-controls-btn'>
              -
            </button>
          </div>
        </div>
        <button className='cardProduct__controlsBox-btnAdd'>
          Agregar <Icon name='cart' size={15} />{' '}
        </button>
      </div>
    </Card>
  )
}

export default ProductCard
