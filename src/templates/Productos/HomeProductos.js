import CardProduct from '../../organisms/products/cardProduct'

const HomeProductosTemplate = ({ dataProducts }) => {
  return dataProducts.map((product, index) => (
    <CardProduct key={index} product={product} />
  ))
}

export default HomeProductosTemplate
