import Navbar from '../../organisms/menu'
import MetaTags from '../../organisms/metas'
// Atoms
import Title from '../../atoms/title'

const NosotrosTemplate = () => {
  return (
    <>
      <MetaTags title='Nosotros' description='descripcion nosotros' />
      <Navbar />
      <Title title='hola nosotros' />
    </>
  )
}

export default NosotrosTemplate
