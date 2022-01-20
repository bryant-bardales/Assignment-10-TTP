const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})


const getEmployeeById = (request, response) => {
    const { empl_id } = parseInt(request.params.id)
  pool.query('SELECT * FROM employee WHERE empl_id = $1', [empl_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const onboardEmployee = (request, response) => {
  const { empl_id, dept_name } = request.body

  pool.query('INSERT INTO departments (empl_id, dept_name) VALUES ($1, $2);', [empl_id, dept_name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`New employee added with ID: ${empl_id} settled into ${dept_name}`)
  })
}


module.exports = {
  getEmployeeById,
  onboardEmployee,
}