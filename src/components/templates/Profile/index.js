import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Cesta from '../../organisms/cesta'
import InformationPersonal from '../../organisms/profile/InformationPersonal'
import Orders from '../../organisms/profile/Orders'
import Footer from '../../organisms/footer'

const ProfileTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <Cesta />
      <div className='wrapper'>
        <InformationPersonal />
        <Orders />
      </div>
      <Footer />
    </>
  )
}

export default ProfileTemplate
