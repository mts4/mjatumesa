// Redux
import { useSelector } from 'react-redux'
// Utils
import { formatPriceCLP } from '../../../utils/formats'
import { totalPriceCesta } from '../../../utils/functions'
// Styles
import Wrapper from './styles'

const Cesta = () => {
  // const dispatch = useDispatch()

  const dataCesta = useSelector(state => state.products.dataCesta)

  return (
    <Wrapper>
      <h5 className='title'>Mi Cesta</h5>
      <div className='body'>
        {dataCesta.length > 0 ? (
          dataCesta.map((product, index) => (
            <div className='item' key={index}>
              <div className='item__image'>
                <img src={product.image} alt='' className='item__image-img' />
                <div className='item__info'>
                  <p className='item__info-title'>{product.title}</p>
                  <p className='item__info-quantity'>
                    {product.groupPersons} Personas
                  </p>
                </div>
              </div>
              <div className='item__controls'>
                <button className='item__controls-btn'>-</button>
                <p className='item__controls-quantityText'>
                  {product.quantity}
                </p>
                <button className='item__controls-btn'>+</button>
              </div>
              <div className='item__price'>{formatPriceCLP(product.price)}</div>
            </div>
          ))
        ) : (
          <p>no tiene productos</p>
        )}
      </div>
      <div className='footer'>
        <div className='footer__delivery'>
          <p className='footer__delivery-text'>Despacho*</p>
          <p className='footer__delivery-price'>{formatPriceCLP(3550)}</p>
        </div>
        <div className='footer__total'>
          <p className='footer__total-text'>Total pedido</p>
          <p className='footer__total-price'>
            {formatPriceCLP(totalPriceCesta(dataCesta))}
          </p>
        </div>
        <button className='footer__btnShop'>Realizar pedido</button>
        <p className='footer__legal'>
          *Precio de despacho para Región Metropolitana de Santiago.
        </p>
      </div>
    </Wrapper>
  )
}

export default Cesta
