const path = require('path')
const fs = require('fs')

const filePath = '/home/user/docs/file.txt'
// const filePath = './file.txt'

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(`Файл ${filePath} не існує`)
  } else {
    console.log(`Файл ${filePath} існує`)
  }
})

// R_OK
// W_OK
// X_OK
