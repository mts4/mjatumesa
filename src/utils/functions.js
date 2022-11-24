export const totalPriceCesta = cesta => {
  let total = 0
  cesta.map(product => (total = product.price * product.quantity + total))
  return total
}

export const orderProducts = (products, order) => {
  // If empty order return normal array
  if (order === '') {
    return [...products]
  } else {
    return [...products].sort((productA, productB) =>
      order === 'asc'
        ? productA.price - productB.price
        : productB.price - productA.price
    )
  }
}
