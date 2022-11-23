import { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../redux/productosSlice'
import Icon from 'cheffify-react-icons'
// Utils
import { formatPriceCLP } from '../../../../utils/formats'
// Styles
import Card from './styles'

const ProductCard = product => {
  const dispatch = useDispatch()
  const { title, description, image, price } = product.data
  const defaultValueSelect = 4
  const [quantity, setQuantity] = useState(1)
  const [groupPersons, setGroupPersons] = useState(defaultValueSelect)

  const handleClickAddProduct = () => {
    const params = {
      title,
      description,
      image,
      price,
      quantity,
      groupPersons,
    }
    dispatch(addProduct(params))
  }

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
        <select
          className='cardProduct__sizePeople-select'
          onChange={number => setGroupPersons(number.target.value)}
        >
          <option value={4} defaultValue>
            4 Personas
          </option>
          <option value={2}>2 Personas</option>
        </select>
      </div>
      <div className='cardProduct__controlsBox'>
        <div className='cardProduct__controlsBox-quantity'>
          <span className='cardProduct__controlsBox-quantity-number'>
            {quantity}
          </span>
          <div className='cardProduct__controlsBox-quantity-controls'>
            <button
              className='cardProduct__controlsBox-quantity-controls-btn'
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <button
              className='cardProduct__controlsBox-quantity-controls-btn'
              onClick={() => quantity > 0 && setQuantity(quantity - 1)}
            >
              -
            </button>
          </div>
        </div>
        <button
          className='cardProduct__controlsBox-btnAdd'
          onClick={() => handleClickAddProduct()}
        >
          Agregar
          <Icon name='cart' size={15} />
        </button>
      </div>
    </Card>
  )
}

export default ProductCard
