const fsp = require('fs').promises

const getData = async () => {
  try {
    const data = await fsp.readFile('test.js')
    await fsp.access('test.js')
    return data
  } catch (error) {
    throw error
  }
}

module.exports = getData
