// Redux
import { useSelector } from 'react-redux'
import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Cesta from '../../organisms/cesta'
import CarouselProductos from '../../molecules/Carousels/CarouselProducts'
import Filter from '../../organisms/filter'
import ProductsFilter from '../../organisms/products/productsFilter'
import Footer from '../../organisms/footer'

import Wrapper from './styles'

const ShopTemplate = () => {
  const isVisibleCesta = useSelector(state => state.products.isVisibleCesta)
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      {isVisibleCesta === true && <Cesta />}
      <Wrapper>
        <CarouselProductos />
        <div className='container'>
          <Filter />
          <ProductsFilter />
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

export default ShopTemplate
