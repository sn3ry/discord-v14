const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'discord',
  password: 'Simple1510S',
  port: 5432,
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'discord',
<<<<<<< HEAD
  password: '',
=======
  password: 'GABAGABA',
>>>>>>> 23c059066c0220609b1fcf6f440fe285e9eb944f
  port: 5432,
})
module.exports = pool
