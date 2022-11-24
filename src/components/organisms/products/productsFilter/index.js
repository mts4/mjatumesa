import { useState } from 'react'
// Products
import ProductCard from '../productCard'
// Utils
import { PRODUCTS } from '../../../../config/db.products'
import { orderProducts } from '../../../../utils/functions'
// Icons
import Icon from 'cheffify-react-icons'
// Styles
import Wrapper from './styles'

const ProductsFilter = () => {
  const [dataProduct, setDataProduct] = useState(PRODUCTS)

  const handleChangeSelect = order =>
    setDataProduct(orderProducts(PRODUCTS, order))

  return (
    <Wrapper>
      <div className='header'>
        <div className='header__left'>
          <Icon name='angle-down' size={20} color='#262C57' />
          <h5>Nuestra Carta</h5>
        </div>
        <div className='header__right'>
          <select
            name=''
            id=''
            className='header__right-select'
            onChange={order => handleChangeSelect(order.target.value)}
          >
            <option value=''>Ordenar por</option>
            <option value='asc'>Precio (de bajo a alto)</option>
            <option value='desc'>Precio (de alto a bajo)</option>
          </select>
        </div>
      </div>
      <div className='body'>
        {dataProduct &&
          dataProduct.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </Wrapper>
  )
}

export default ProductsFilter
