import { createServer } from 'net'
import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'

const server = createServer()

server.on('connection', (socket) => {
  console.log('New client connected!')

  socket.setEncoding('utf-8')

  socket.on('data', async (msg) => {
    console.log(`Data from client: ${msg}`)
    socket.write(`${msg.toString()}`)

    const readStream = createReadStream('source.txt')

    try {
      await pipeline(readStream, socket)
    } catch (error) {
      console.error(error)
    }
  })

  socket.on('end', () => {
    console.log('Client is disconnected!')
  })
})

server.listen(3000, () => {
  const { port } = server.address()
  console.log(`TCP Server started on port ${port}!`)
})
