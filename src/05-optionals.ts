export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10
  }
}

console.log(createProduct(1))
console.log(createProduct(1, false))
console.log(createProduct(1, true, 0))
