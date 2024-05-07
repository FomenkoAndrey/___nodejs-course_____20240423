import { readFileSync } from 'fs'
import { join } from 'path'
import { privateDecrypt } from 'crypto'

const privateKey = readFileSync(join(process.cwd(), 'keys', 'privateKey.pem'), 'utf8')

const encryptedFromFile = readFileSync(join(process.cwd(), 'keys', 'encrypted.txt'))

const decrypted = privateDecrypt(privateKey, encryptedFromFile)

console.log('Decrypted:', decrypted.toString())
