import { generateKeyPairSync } from 'crypto'
import { writeFileSync } from 'fs'
import { join } from 'path'

let algorithm = 'rsa'
let bits = 2048

let keypair = generateKeyPairSync(algorithm, {
  modulusLength: bits,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
})

writeFileSync(join(process.cwd(), 'keys', 'publicKey.pem'), keypair.publicKey)

writeFileSync(join(process.cwd(), 'keys', 'privateKey.pem'), keypair.privateKey)
