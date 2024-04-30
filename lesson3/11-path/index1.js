const path = require('path')

const filePath = '/home/user/docs/file.txt'

const fileName = path.basename(filePath)
const ext = path.extname(filePath)

console.log(fileName)

console.log(ext)
