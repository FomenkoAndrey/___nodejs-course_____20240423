import fs from 'fs'

const filePath = './dump.txt'
const writeStream = fs.createWriteStream(filePath)

process.stdin.pipe(writeStream)
