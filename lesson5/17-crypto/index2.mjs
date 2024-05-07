import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { publicEncrypt } from 'crypto'

const publicKey = readFileSync(join(process.cwd(), 'keys', 'publicKey.pem'), 'utf8')

const text = 'Hello, world!'

const encrypted = publicEncrypt(publicKey, Buffer.from(text))

writeFileSync(join(process.cwd(), 'keys', 'encrypted.txt'), encrypted)

console.log('Encrypted:', encrypted.toString())
