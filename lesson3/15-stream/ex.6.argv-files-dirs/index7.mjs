import fs from 'fs'

const sourceDir = 'output'
const destinationDir = 'output-copy'

if (!fs.existsSync(sourceDir)) {
  console.log(`Source dir ${sourceDir} does not exist`)
  console.log('Exit!')
  process.exit(0)
}

if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir)
  console.log('Destination directory was removed')
}

fs.mkdirSync(destinationDir)
