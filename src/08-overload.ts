// 'Nico' => ['N', 'i', 'c', 'o'] ==> string => string[]
// ['N', 'i', 'c', 'o'] => 'Nico' ==> string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('')
  } else {
    return input.split('')
  }
}

let rta1 = parseStr('Nico')
// rta1.reverse()

let rta2 = parseStr(['N', 'i', 'c', 'o'])
// rta2.toLowerCase()

console.log({
  rta1, rta2
})
