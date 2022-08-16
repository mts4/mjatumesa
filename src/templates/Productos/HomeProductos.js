// Components
import Navbar from '../../organisms/menu'
import Title from '../../atoms/title'
import SingleProductosSkeletons from '../Skeletons/SingleProductosSkeletons'
// Hooks
import { useFetchData } from '../../hooks/useFetch'
// Utils
import { BASE_URL, PRODUCTOS } from '../../api/apiProductos'

const HomeProductosTemplate = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}${PRODUCTOS}`)
  if (loading) return <SingleProductosSkeletons />
  if (error) return `Error ${error}`
  return (
    (<Navbar />),
    data.map((product, index) => (
      <Title key={index} title={`Producto ${product.acf.title}`} />
    ))
  )
}

export default HomeProductosTemplate
