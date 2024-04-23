// ! 1
import { user } from './source.mjs'
import { user2 } from './source.mjs'
import { user3 } from './source.mjs'

console.log(user)
console.log(user2)
console.log(user3)

//  ! 2 - імпортуємо константу із назвою, зміненою при експорті
//  import { newUser } from './users.mjs'
//  console.log(newUser)

//  ! 3 - імпортуємо все із './users.mjs'
//  import * as data from './users.mjs'
//  console.log(data)

//  ! 4 - якщо імпортувати модуль декілька разів, то модуль імпортується лише 1 раз
