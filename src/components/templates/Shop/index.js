import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Cesta from '../../organisms/cesta'
import CarouselProductos from '../../molecules/Carousels/CarouselProducts'
import Filter from '../../organisms/filter'
import ProductsFilter from '../../organisms/products/productsFilter'
import Somos from '../../organisms/products/somos'
import Footer from '../../organisms/footer'

const ShopTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <Cesta />
      <div className='wrapper'>
        <CarouselProductos />
        <div className='container'>
          <Filter />
          <ProductsFilter />
        </div>
        <Somos />
      </div>
      <Footer />
    </>
  )
}

export default ShopTemplate
