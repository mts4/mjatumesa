import ImageExample from '../../../assets/images/jpg/food/charquican.jpg'
import { formatPriceCLP } from '../../../utils/formats'
// Styles
import Wrapper from './styles'

const Cesta = () => {
  return (
    <Wrapper>
      <h5 className='title'>Mi Cesta</h5>
      <div className='body'>
        <div className='item'>
          <div className='item__image'>
            <img src={ImageExample} alt='' className='item__image-img' />
            <div className='item__info'>
              <p className='item__info-title'>Charquican</p>
              <p className='item__info-quantity'>4 Personas</p>
            </div>
          </div>
          <div className='item__controls'>
            <button className='item__controls-btn'>-</button>
            <p className='item__controls-quantityText'>1</p>
            <button className='item__controls-btn'>+</button>
          </div>
          <div className='item__price'>{formatPriceCLP(3550)}</div>
        </div>
        <div className='item'>
          <div className='item__image'>
            <img src={ImageExample} alt='' className='item__image-img' />
            <div className='item__info'>
              <p className='item__info-title'>Charquican</p>
              <p className='item__info-quantity'>4 Personas</p>
            </div>
          </div>
          <div className='item__controls'>
            <button className='item__controls-btn'>-</button>
            <p className='item__controls-quantityText'>1</p>
            <button className='item__controls-btn'>+</button>
          </div>
          <div className='item__price'>{formatPriceCLP(3550)}</div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer__delivery'>
          <p className='footer__delivery-text'>Despacho*</p>
          <p className='footer__delivery-price'>{formatPriceCLP(3550)}</p>
        </div>
        <div className='footer__total'>
          <p className='footer__total-text'>Total pedido</p>
          <p className='footer__total-price'>{formatPriceCLP(3550)}</p>
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
