const path = require('path')

const filePath = '/home/user/docs/file.txt'
const parsedPath = path.parse(filePath)

console.log(parsedPath)