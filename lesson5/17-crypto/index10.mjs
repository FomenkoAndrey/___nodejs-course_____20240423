import crypto from 'crypto'

const algorithm = 'aes-192-cbc'
const password = 'fk6sg5kdh4gdo6ui4u5928hsd4fh3ld4ds243542356hf'

const key = crypto.scryptSync(password, 'salt', 24)

const encryptedTextWithIv =
    '4d5a60aa715941998cf4e014f7170274:85bb0a15c86178a60c179db6ba6bd4897a5afdbbdbea710e441e100df19ea216662aed6d49f41244eb1851ab3956c66a97e6337ae1eff7350d8230e1552a9e33'
const [ivText, encryptedText] = encryptedTextWithIv.split(':')

const iv = Buffer.from(ivText, 'hex')

const decipher = crypto.createDecipheriv(algorithm, key, iv)

let decrypted = decipher.update(encryptedText, 'hex', 'utf8')

decrypted += decipher.final('utf8')

const decryptedObject = JSON.parse(decrypted)

console.log(decryptedObject)
