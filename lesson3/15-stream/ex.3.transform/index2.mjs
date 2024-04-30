import { Transform } from 'stream'

const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const arrayOfChars = chunk.toString().split('')
    const lastChar = arrayOfChars.pop()
    const reversed = arrayOfChars.reverse().concat(lastChar).join('')

    callback(null, reversed)
  }
})

process.stdin.pipe(reverseStream).pipe(process.stdout)
