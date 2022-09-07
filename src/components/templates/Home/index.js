import Navbar from '../../organisms/menu'
import MetaTags from '../../organisms/metas'
// Organismn
import TopSection from '../../organisms/home/TopSection'

const HomeTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <TopSection />
    </>
  )
}

export default HomeTemplate
