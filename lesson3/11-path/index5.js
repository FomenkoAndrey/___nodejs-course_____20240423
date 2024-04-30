const path = require('path')

const path1 = '/home/user/docs'
const path2 = '/home/user/docs/file.txt'

const relativePath = path.relative(path1, path2)

console.log(relativePath)
