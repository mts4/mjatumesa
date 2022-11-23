// Products
import { PRODUCTS } from '../../../../config/db.products'
import ProductCard from '../productCard'
// Icons
import Icon from 'cheffify-react-icons'
// Styles
import Wrapper from './styles'

const ProductsFilter = () => {
  return (
    <Wrapper>
      <div className='header'>
        <div className='header__left'>
          <Icon name='angle-down' size={20} color='#262C57' />
          <h5>Nuestra Carta</h5>
        </div>
        <div className='header__right'>
          <select name='' id='' className='header__right-select'>
            <option value=''>Ordenar por</option>
            <option value='asc'>Precio (de bajo a alto)</option>
            <option value='desc'>Precio (de alto a bajo)</option>
          </select>
        </div>
      </div>
      <div className='body'>
        {PRODUCTS &&
          PRODUCTS.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </Wrapper>
  )
}

export default ProductsFilter
