export const totalPriceCesta = cesta => {
  let total = 0
  cesta.map(product => (total = product.price * product.quantity + total))
  return total
}

export const orderProducts = ({ dataProducts, order, PRODUCTS }) => {
  // If empty order return normal array
  if (order === '') {
    return [...PRODUCTS]
  } else {
    return [...dataProducts].sort((productA, productB) =>
      order === 'asc'
        ? productA.price - productB.price
        : productB.price - productA.price
    )
  }
}

export const totalItemsProducts = products => {
  const result = products.reduce(
    (acumulador, actual) => acumulador + actual.quantity,
    0
  )
  return result
}

export const totalWithDelivery = (cesta, delivery) => {
  let total = 0
  cesta.map(product => (total = product.price * product.quantity + total))
  total = total + delivery
  return total
}
