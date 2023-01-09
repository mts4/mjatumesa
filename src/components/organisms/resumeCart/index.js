// Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantityCesta } from '../../../redux/productosSlice'
// Utils
import { formatPriceCLP } from '../../../utils/formats'
import { totalPriceCesta } from '../../../utils/functions'
import ControlsProduct from '../../molecules/ControlsProduct'
// Styles
import Wrapper from './styles'

const ResumeCart = () => {
  const dataCesta = useSelector(state => state.products.dataCesta)
  return (
    <Wrapper>
      <div className='head'>
        <h5 className='head__title'>Resumen del pedido</h5>
        {dataCesta.length > 0 &&
          dataCesta.map(
            (product, index) =>
              product && (
                <RowProduct
                  key={index}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  image={product.image}
                />
              )
          )}
      </div>
      <div className='subtotal'>
        <div className='subtotal__box' style={{ marginBottom: 10 }}>
          <p className='subtotal__box-title'>Subtotal</p>
          <p className='subtotal__box-text'>
            {formatPriceCLP(totalPriceCesta(dataCesta))}
          </p>
        </div>
        <div className='subtotal__box'>
          <p className='subtotal__box-txt'>Despacho*</p>
          <p className='subtotal__box-txt'>$3.000</p>
        </div>
        <div className='subtotal__box'>
          <p className='subtotal__box-txt'>IVA</p>
          <p className='subtotal__box-txt'>$1.000</p>
        </div>
      </div>
      <div className='total'>
        <p className='total__text'>Total pedido</p>
        <p className='total__total'>
          {formatPriceCLP(totalPriceCesta(dataCesta))}
        </p>
      </div>
    </Wrapper>
  )
}

export default ResumeCart

export const RowProduct = ({ title, price, quantity, image }) => {
  const dispatch = useDispatch()
  const handleClickIncrement = (quantity, title, operation) =>
    dispatch(updateQuantityCesta({ title, quantity, operation }))
  const handleClickDecrement = (quantity, title, operation) => {
    quantity > 1 &&
      dispatch(updateQuantityCesta({ title, quantity, operation }))
  }
  return (
    <div className='products'>
      <img className='products__image' src={image} />
      <div className='products__info'>
        <p className='products__info-name'>{title}</p>
        <ControlsProduct
          handleClickIncrement={handleClickIncrement}
          handleClickDecrement={handleClickDecrement}
          quantity={quantity}
          title={title}
        />
      </div>
      <div className='products__price'>
        <p className='products__price-text'> {formatPriceCLP(price)}</p>
      </div>
    </div>
  )
}
