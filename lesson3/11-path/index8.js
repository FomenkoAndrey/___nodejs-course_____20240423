const path = require('path')

const relativePath = 'docs/file.txt'
const absolutePath = path.resolve(relativePath)

console.log(absolutePath)
