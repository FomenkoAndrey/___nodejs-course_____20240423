import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { privateDecrypt, publicEncrypt } from 'crypto'

const publicKey = readFileSync(join(process.cwd(), 'keys', 'publicKey.pem'), 'utf8')
const privateKey = readFileSync(join(process.cwd(), 'keys', 'privateKey.pem'), 'utf8')

const text = 'Hello, world!'

const encrypted = publicEncrypt(publicKey, Buffer.from(text))

writeFileSync(join(process.cwd(), 'keys', 'encrypted.txt'), encrypted)

const encryptedFromFile = readFileSync(join(process.cwd(), 'keys', 'encrypted.txt'))

const decrypted = privateDecrypt(privateKey, encryptedFromFile)

console.log('Decrypted:', decrypted.toString())
