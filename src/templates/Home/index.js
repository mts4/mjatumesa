import Navbar from '../../organisms/menu'
import MetaTags from '../../organisms/metas'
// Atoms
import Title from '../../atoms/title'

const HomeTemplate = () => {
  return (
    <>
      <MetaTags title='Home' description='descripcion home' />
      <Navbar />
      <Title title='hola desde home' />
    </>
  )
}

export default HomeTemplate
