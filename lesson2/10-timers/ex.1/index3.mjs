let num = 1

const recursiveTimeout = () => {
  const word = num === 1 ? 'секунда' : num >= 2 && num <= 4 ? 'секунди' : 'секунд'

  console.log(`Цей код виконається кожні ${num} ${word}`)

  setTimeout(recursiveTimeout, num * 1000)

  num++
}

recursiveTimeout()
