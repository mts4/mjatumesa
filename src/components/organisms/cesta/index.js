// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
  showOrHideCesta,
  removeProductByNameInCesta,
} from '../../../redux/productosSlice'
// Molecules
import Icon from '../../molecules/Icon'
// Utils
import { formatPriceCLP } from '../../../utils/formats'
import { totalPriceCesta } from '../../../utils/functions'
// Styles
import Wrapper from './styles'

const Cesta = () => {
  const dispatch = useDispatch()
  // Event click outside element
  document.addEventListener(
    'mousedown',
    e =>
      !document.querySelector('.boxCesta').contains(e.target) &&
      dispatch(showOrHideCesta())
  )
  const dataCesta = useSelector(state => state.products.dataCesta)

  const handleClickDelete = name => {
    dispatch(removeProductByNameInCesta(name))
  }

  const handleClickDecrement = () => {
    console.log('decrementar')
  }

  return (
    <Wrapper className='boxCesta'>
      <h5 className='title'>Mi Cesta</h5>
      {dataCesta.length > 0 ? (
        <>
          <div className='body'>
            {dataCesta.map((product, index) => (
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
                <div className='item__delete'>
                  <button onClick={() => handleClickDelete(product.title)}>
                    <Icon
                      name='icon-trash'
                      width={15}
                      height={15}
                      customStyle={{ cursor: 'pointer' }}
                    />
                  </button>
                </div>
                <div className='item__controls'>
                  <button
                    className='item__controls-btn'
                    onClick={() => handleClickDecrement(product.quantity)}
                  >
                    -
                  </button>
                  <p className='item__controls-quantityText'>
                    {product.quantity}
                  </p>
                  <button className='item__controls-btn'>+</button>
                </div>
                <div className='item__price'>
                  {formatPriceCLP(product.price)}
                </div>
              </div>
            ))}
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
        </>
      ) : (
        <div className='notHaveProducts'>
          <p>No tienes productos seleccionados.</p>
        </div>
      )}
    </Wrapper>
  )
}

export default Cesta
