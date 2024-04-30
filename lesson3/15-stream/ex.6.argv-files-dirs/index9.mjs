import fs from 'fs/promises'
import path from 'path'

const sourceDir = 'output'
const destinationDir = 'output-copy'

async function copyDirectory() {
  try {
    await fs.access(sourceDir)
    try {
      await fs.access(destinationDir)
      await fs.rm(destinationDir, { recursive: true, force: true })
      console.log('Destination directory was removed')
    } catch (err) {}
    await fs.mkdir(destinationDir)

    const files = await fs.readdir(sourceDir)

    for (const file of files) {
      const sourceFile = path.join(sourceDir, file)
      const destinationFile = path.join(destinationDir, file)

      await fs.copyFile(sourceFile, destinationFile)
    }

    console.log(`All files were copied from ${sourceDir} to ${destinationDir}`)
  } catch (err) {
    console.log(`Source dir ${sourceDir} does not exist`)
    console.log('Exit!')
    process.exit(0)
  }
}

copyDirectory().catch(console.log)