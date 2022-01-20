const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ Message: 'Testing Assignment 10: TTP' })
})

//ADD REQUEST METHODS HERE

// app.get('/users', db.getUsers) PLACEHOLDER
// app.get('/users/:id', db.getUserById) PLACEHOLDER
// app.post('/users', db.createUser) PLACEHOLDER
// app.put('/users/:id', db.updateUser) PLACEHOLDER
// app.delete('/users/:id', db.deleteUser) PLACEHOLDER

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})