const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post("", function (req, res){
    // post new line of data 
})

app.get("", function (req, res){
    // get two lines of data from db
})

app.listen(3000)