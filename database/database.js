const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'discord',
  password: 'GABAGABA',
  port: 5432,
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'discord',
  password: 'GABAGABA',
  port: 5432,
})
module.exports = pool
