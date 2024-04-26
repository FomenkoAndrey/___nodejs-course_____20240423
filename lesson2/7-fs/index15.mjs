import { readdir, stat } from 'fs/promises'

async function listDirectories(dirPath) {
  const directories = await readdir(dirPath)

  for (const directory of directories) {
    if (directory === '.git' || directory === '.idea' || directory === '.vscode') {
      continue
    }

    const directoryPath = `${dirPath}/${directory}`

    const stats = await stat(directoryPath)

    if (stats.isDirectory()) {
      console.log(directoryPath.replace('//', '/'))

      await listDirectories(directoryPath)
    }
  }
}

listDirectories('../')
