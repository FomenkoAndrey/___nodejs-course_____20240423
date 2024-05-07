import { createGzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'

const gzip = createGzip()

const readStream = createReadStream('./data/index.html')
const writeStream = createWriteStream('./data/index.html.gz')

readStream.pipe(gzip).pipe(writeStream)
