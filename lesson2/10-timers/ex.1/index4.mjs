let num = 1
let count = 0
let timer

const recursiveTimeout = () => {
  const word = num === 1 ? 'секунда' : num >= 2 && num <= 4 ? 'секунди' : 'секунд'

  console.log(`Цей код виконається кожні ${num} ${word}`)

  timer = setTimeout(recursiveTimeout, num * 1000)

  num++
  count++

  if (count === 3) {
    clearTimeout(timer)
    console.log('Таймер скинуто після 3 ітерацій')
  }
}

recursiveTimeout()
