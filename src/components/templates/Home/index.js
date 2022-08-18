import Navbar from '../../organisms/menu'
import MetaTags from '../../organisms/metas'
// Atoms
import Title from '../../atoms/title'
// Utils
import { COLORS } from '../../../theme/css/global.colors'

const HomeTemplate = () => {
  return (
    <>
      <MetaTags title='Home' description='descripcion home' />
      <Navbar />
      <Title title='hola desde home' fontSize={20} color={COLORS.black} />
    </>
  )
}

export default HomeTemplate
