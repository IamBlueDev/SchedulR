const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Scheduler',
    password: 'toor',
    port: 5432,
  })

  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
    
//     pool.end()
//   })

  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'toor',
    port: 5432,
  })
//   client.connect()
//   client.query('SELECT * FROM schedules', (err, res) => {
//     // console.log(err, res)
//     // console.log(res);
//     // console.log("Connected");
//     client.end()
//   })


  exports.Client = client;
  exports.Pool = pool;