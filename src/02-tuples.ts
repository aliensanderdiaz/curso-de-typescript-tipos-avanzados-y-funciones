const prices: (number | string)[] = [1,3,2,2, 'as']
prices.push(1)
prices.push('1')

let user: [string, number]
user = ['alien', 10]
// user = ['alien', 10, 15]
const [username, age] = user
console.log({ username, age })
