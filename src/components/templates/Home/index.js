import Navbar from '../../organisms/menu'
import MetaTags from '../../organisms/metas'
// Organismn
import TopSection from '../../organisms/home/TopSection'
import SecondSection from '../../organisms/home/SecondSection'

const HomeTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <TopSection />
      <SecondSection />
    </>
  )
}

export default HomeTemplate
