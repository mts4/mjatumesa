import { Link } from 'react-router-dom'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
  showOrHideCesta,
  removeProductByNameInCesta,
  updateQuantityCesta,
} from '../../../redux/productosSlice'
// Molecules
import Icon from '../../molecules/Icon'
// Hooks
import { useClickOutElement } from '../../../hooks/useClickOutElement'
// Utils
import { formatPriceCLP } from '../../../utils/formats'
import { totalPriceCesta } from '../../../utils/functions'
// Styles
import Wrapper from './styles'

const Cesta = () => {
  const dispatch = useDispatch()
  const dataCesta = useSelector(state => state.products.dataCesta)
  const isVisibleCesta = useSelector(state => state.products.isVisibleCesta)

  const handleClickDelete = name => dispatch(removeProductByNameInCesta(name))
  const handleClickClose = () => dispatch(showOrHideCesta())
  const handleClickOutSideElement = () => dispatch(showOrHideCesta())

  const handleClickIncrement = (quantity, title, operation) =>
    dispatch(updateQuantityCesta({ title, quantity, operation }))
  const handleClickDecrement = (quantity, title, operation) => {
    quantity > 1 &&
      dispatch(updateQuantityCesta({ title, quantity, operation }))
  }
  const ref = useClickOutElement(handleClickOutSideElement)

  return (
    isVisibleCesta === true && (
      <Wrapper className='boxCesta' ref={ref}>
        <div className='boxClose' onClick={() => handleClickClose()}>
          <Icon
            name='icon-close'
            width={15}
            height={15}
            customStyle={{
              position: 'absolute',
              right: 15,
              top: 15,
              cursor: 'pointer',
            }}
          />
        </div>
        <h5 className='title'>Mi Cesta</h5>
        {dataCesta.length > 0 ? (
          <>
            <div className='body'>
              {dataCesta.map((product, index) => (
                <div className='item' key={index}>
                  <div className='item__image'>
                    <img
                      src={product.image}
                      alt=''
                      className='item__image-img'
                    />
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
                      onClick={() =>
                        handleClickDecrement(
                          product.quantity,
                          product.title,
                          'rest'
                        )
                      }
                    >
                      -
                    </button>
                    <p className='item__controls-quantityText'>
                      {product.quantity}
                    </p>
                    <button
                      className='item__controls-btn'
                      onClick={() =>
                        handleClickIncrement(
                          product.quantity,
                          product.title,
                          'sum'
                        )
                      }
                    >
                      +
                    </button>
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
              <Link
                to='/delivery'
                className='footer__btnShop'
                onClick={() => handleClickClose()}
              >
                Realizar pedido
              </Link>
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
  )
}

export default Cesta
