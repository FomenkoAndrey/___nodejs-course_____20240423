const getData = require('./index')

jest.mock('fs')

describe('Test promise function:', () => {
  test('test async getData', async () => {
    expect(await getData()).toBe('success')
  })
})

module.exports = getData
