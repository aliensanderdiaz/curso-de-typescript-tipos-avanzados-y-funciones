export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock
  }
}

console.log(createProduct(1))
console.log(createProduct(1, false))
console.log(createProduct(1, true, 0))
