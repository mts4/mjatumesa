import Navbar from '../../organisms/menu'
import MetaTags from '../../organisms/metas'
import TopSection from '../../organisms/home/TopSection'
import SecondSection from '../../organisms/home/SecondSection'
import ThirdSection from '../../organisms/home/ThirdSection'

const HomeTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <TopSection />
      <SecondSection />
      <ThirdSection />
    </>
  )
}

export default HomeTemplate
