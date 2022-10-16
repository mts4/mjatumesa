import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import TopSection from '../../organisms/home/TopSection'
import SecondSection from '../../organisms/home/SecondSection'
import ThirdSection from '../../organisms/home/ThirdSection'
import FourSection from '../../organisms/home/FourSection'
import FiveSection from '../../organisms/home/FiveSection'
import Prensa from '../../organisms/home/Prensa'
import Footer from '../../organisms/footer'

const HomeTemplate = () => {
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <Prensa />
      <Footer />
    </>
  )
}

export default HomeTemplate
