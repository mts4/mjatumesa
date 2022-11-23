// Redux
import { useSelector } from 'react-redux'
import MetaTags from '../../organisms/metas'
import Navbar from '../../organisms/menu'
import Cesta from '../../organisms/cesta'
import TopSection from '../../organisms/home/TopSection'
import SecondSection from '../../organisms/home/SecondSection'
import ThirdSection from '../../organisms/home/ThirdSection'
import FourSection from '../../organisms/home/FourSection'
import FiveSection from '../../organisms/home/FiveSection'
import FeedBack from '../../organisms/home/FeedBack'
import Prensa from '../../organisms/home/Prensa'
import Footer from '../../organisms/footer'

const HomeTemplate = () => {
  const isVisibleCesta = useSelector(state => state.products.isVisibleCesta)
  return (
    <>
      <MetaTags title='Cheffify - Home' description='descripcion home' />
      <Navbar />
      {isVisibleCesta === true && <Cesta />}
      <TopSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <FeedBack />
      <Prensa />
      <Footer />
    </>
  )
}

export default HomeTemplate
