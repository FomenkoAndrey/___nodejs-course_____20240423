import fs from 'node:fs/promises'

const createHtmlTemplate = (htmlInjection) => `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTTP server</title>
      </head>
      
      <body style="font-family: Arial, Helvetica, sans-serif;">
        <div style="width: min(100% - 40px, 992px); margin-inline: auto;">
          ${htmlInjection}
        </div>
      </body>
      
      </html>
    `

const rootHtmlTemplate = createHtmlTemplate('<h1>Hello from HTTP server</h1>')

const notFoundHtmlTemplate = createHtmlTemplate('<h1>404 Page Not Found</h1>')

const generateTodosTemplate = () => {
  const headerHtml = `<h1>Todos List</h1>`
  const todosHtml = todos.map(todo => `
        <div style="border-bottom: 1px solid #ccc; padding: 10px;">
          <h2>${todo.title}</h2>
          <p>Id: ${todo.id}</p>
          <p>User ID: ${todo.userId}</p>
          <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
        </div>
      `).join('')

  const buttonHtml = `<button onclick="location.href='/form'">Add new todo</button>`

  return createHtmlTemplate(`${headerHtml}${todosHtml}${buttonHtml}`)
}

let formTemplate

const loadFormTemplate = async () => {
  try {
    formTemplate = await fs.readFile('./templates/form.html')
  } catch (error) {
    console.error('Error reading form.html file:', error)
  }
}

loadFormTemplate()

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  }
]


export { rootHtmlTemplate, notFoundHtmlTemplate, todos, formTemplate, generateTodosTemplate }
