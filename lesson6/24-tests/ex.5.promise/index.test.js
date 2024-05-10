const getData = require('./index.js')

test('getData returns the correct data after a delay', async () => {
  jest.useFakeTimers()

  const dataPromise = getData()

  jest.runAllTimers()

  const data = await dataPromise
  expect(data).toEqual({ name: 'John', age: 25, sex: 'male' })
})
