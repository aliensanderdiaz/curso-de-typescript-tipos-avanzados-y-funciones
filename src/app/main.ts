import { faker } from '@faker-js/faker';

import { products, addProduct, updateProduct, findProducts } from './products/product.service'

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({
      min: 10,
      max: 100
    }),
    categoryId: faker.datatype.uuid()
  })
}

console.log({ products })

let product1 = products[0]

updateProduct(product1.id, {
  title: 'Mi producto editado',
})

findProducts({
  color: 'Red',
  stock: 10
})
