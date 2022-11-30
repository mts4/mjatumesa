import { useState, useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  loadAllProducts,
  orderByAscOrDesc,
  resetProducts,
} from '../../../../redux/productosSlice'
// Products
import ProductCard from '../productCard'
// Icons
import Icon from '../../../molecules/Icon'
// Styles
import Wrapper from './styles'

const ProductsFilter = () => {
  const dispatch = useDispatch()
  const [offSet, setOffSet] = useState(6)

  const dataProducts = useSelector(state => state.products.dataProducts)
  const isVisibleBtnLoadMore = useSelector(
    state => state.products.isVisibleBtnLoadMore
  )

  const handleChangeSelect = order => dispatch(orderByAscOrDesc(order))
  const handleClickLoadMore = () => setOffSet(offSet + offSet)
  const handleClickShowFilterMobile = () =>
    console.log('mostrar filter en mobile')

  useEffect(() => {
    return () => {
      dispatch(resetProducts())
      setOffSet(6)
    }
  }, [])

  useEffect(() => {
    dispatch(loadAllProducts(offSet))
  }, [offSet])

  return (
    <Wrapper>
      <div className='header'>
        <div className='header__left'>
          <Icon name='icon-carta' width={20} height={20} />
          <h5>Nuestra Carta</h5>
        </div>
        <div className='header__right'>
          <button
            className='visible-mobile header__right-btn'
            onClick={handleClickShowFilterMobile}
          >
            <Icon name='icon-filter' width={14} height={14} />
            <p>Filtrar</p>
          </button>
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
        {dataProducts &&
          dataProducts.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
      </div>
      {isVisibleBtnLoadMore === true && (
        <div className='loadMore'>
          <button onClick={handleClickLoadMore} className='loadMore__btn'>
            <span className='loadMore__btn-text'>Cargar Más</span>
            <i className='loadMore__btn-icon'>+</i>
          </button>
        </div>
      )}
    </Wrapper>
  )
}

export default ProductsFilter
