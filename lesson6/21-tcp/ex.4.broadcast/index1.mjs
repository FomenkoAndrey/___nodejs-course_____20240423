import { createServer } from 'net'

let id = 0
let clients = []

const server = createServer()

server.on('connection', (socket) => {
  socket.id = id++
  clients[socket.id] = socket
  console.log('New client connected!')

  socket.on('data', (msg) => {
    clients.forEach((clientSocket, index) => {
      clientSocket.write(`${index}: `)
      clientSocket.write(msg)
    })
  })

  socket.on('end', () => {
    clients = clients.filter((clientSocket, index) => index !== socket.id)
    console.log('Client is disconnected!')
  })
})

server.listen(3000, () => {
  const { port } = server.address()
  console.log(`TCP Server started on port ${port}!`)
})