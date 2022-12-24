import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Cesta from '../../organisms/cesta'
import Footer from '../../organisms/footer'

const DeliveryTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <Cesta />
      <div className='wrapper'>
        <p>Contenido</p>
      </div>
      <Footer />
    </>
  )
}

export default DeliveryTemplate
