import fs from 'fs'
import path from 'path'
import { pipeline } from 'stream/promises'

const folder = './output'
const fileName = 'dump'
const resultFileName = 'dump-copy'

const readStream = fs.createReadStream(path.join(folder, fileName))

const writeStream = fs.createWriteStream(path.join(folder, resultFileName))

async function runPipeline() {
  try {
    await pipeline(readStream, writeStream)
    console.log('File was copied successfully')
  } catch (err) {
    console.error('Error during file copying:', err)
  }
}

runPipeline()
