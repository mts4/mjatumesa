import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Cesta from '../../organisms/cesta'
import AddressForm from '../../organisms/addressForm'
import ResumeCart from '../../organisms/resumeCart'
import Footer from '../../organisms/footer'
// Styles
import Container from './styles'

const DeliveryTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <Cesta />
      <div className='wrapper'>
        <Container>
          <AddressForm />
          <ResumeCart />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default DeliveryTemplate
