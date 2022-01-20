const express = require('express')
const bodyparser = require('body-parser');
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'kylexue',
  host: 'localhost',
  database: 'company',
  port: 5432,
})

app.get('/', function (req, res) {
  res.send('Hello World')
})


const onboardEmployee = (req, res) => {
    const { empl_id, dept_name } = req.body
    pool.query('INSERT INTO departments (empl_id, dept_name) VALUES ($1, $2);', [empl_id, dept_name], (err, res) =>{
        if(err){
            throw err
        }   
    })
    res.status(201).send(`new employee with id ${empl_id} settled into ${dept_name}`)
}

const getEmployeeById = (req, res) =>{
    const { empl_id1, empl_id2 } = req.body
    pool.query('SELECT * FROM employee WHERE empl_id = $1 OR empl_id = $2', [empl_id1, empl_id2], (error, results) => {
        if (error) {
            console.log(error)
        }
        res.status(200).json(results.rows)
      })
}

app.post("/onboard_dpt", onboardEmployee)

app.get("/employees", getEmployeeById)

app.listen(8000)