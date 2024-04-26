import fs from 'fs'

// ! Варіант без обробки помилок
console.log('start')

const file = fs.readFileSync('./input.txt')

console.log('Buffer:', file)

console.log('toString:', file.toString())

console.log('end')

// ! Варіант з обробкою помилок
// try {
//   const file = fs.readFileSync('./input.txt')
//   console.log('toString:', file.toString())
// } catch (err) {
//   console.log(err.message)
// }
