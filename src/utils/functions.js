export const totalPriceCesta = cesta => {
  let total = 0
  cesta.map(product => (total = product.price * product.quantity + total))
  return total
}
