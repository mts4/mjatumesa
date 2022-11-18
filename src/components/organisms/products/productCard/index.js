import Icon from 'cheffify-react-icons'
// Utils
import { formatPriceCLP } from '../../../../utils/formats'
// Styles
import Card from './styles'

const ProductCard = product => {
  const { title, description, image, price } = product.data
  return (
    <Card className='cardProduct'>
      <div className='cardProduct__header'>
        <div className='cardProduct__cover'>
          <img src={image} className='cardProduct__cover-image' />
        </div>
        <div className='cardProduct__attributes'>
          <h5 className='cardProduct__attributes-title'>{title}</h5>
          <p className='cardProduct__attributes-description'>{description}</p>
        </div>
      </div>
      <div className='cardProduct__sizePeople'>
        <span className='cardProduct__sizePeople-price'>
          {formatPriceCLP(price)}
        </span>
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
