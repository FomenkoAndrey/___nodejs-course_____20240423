function greet(name) {
  console.log('Hello ', name)
}

module.exports = greet

// ! При спробі працювати з таким експортом в index-файлі, буде TypeError: greet is not a function
// exports = greet
