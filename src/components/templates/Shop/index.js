import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Footer from '../../organisms/footer'

import Wrapper from './styles'

const ShopTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <Wrapper>Hola</Wrapper>
      <Footer />
    </>
  )
}

export default ShopTemplate
