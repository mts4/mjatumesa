import parse from 'html-react-parser'

const CardProduct = ({ product }) => {
  const { title, price, image, description } = product.acf
  console.log({ product })
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={description} />
      {parse(description)}
      <p>{price}</p>
    </div>
  )
}

export default CardProduct
