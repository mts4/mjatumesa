// Hooks
import { useFetchData } from '../hooks/useFetch'
// Utils
import { BASE_URL, PRODUCTOS } from '../config/apiProductos'
import HomeProductosTemplate from '../templates/Productos/HomeProductos'

const ProductosPage = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}${PRODUCTOS}`)
  if (loading) return <p>loading...</p>
  if (error) return `Error ${error}`

  return <HomeProductosTemplate dataProducts={data} />
}

export default ProductosPage
