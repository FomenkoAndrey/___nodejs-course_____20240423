function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 25,
        sex: 'male'
      })
    }, 1000)
  })
}

module.exports = getData