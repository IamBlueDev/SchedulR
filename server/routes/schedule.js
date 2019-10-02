var express = require('express');
var router = express.Router();
var User = require('../User/User');
// var app = require('../app.js')
/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Schedule:' });
  // console.log(req);
  // const database = express.get('database');
  // const database = app.get('database');
  const database = req.app.get('database');
  let client = database.Client;
  let clientPool = User.Pool;
  // let schPool = Schdule.Pool;
  // console.log(clientPool[0].Data.UserID);
  // client.query('SELECT NOW()', (err, res) => {
  //   // console.log(err, res)
  //   console.log("Connected");
  //   // client.end()
    
  // })

  // client.end();
  console.log("£")
  // console.log(database)
  // console.log(database);
  // next();
});

const schQuery = {
  name: 'fetch-schedule',
  text: 'SELECT * FROM Schedule WHERE SchID=$1'
}

router.get('/:id', function (req, res, next) {
  console.log('Request Id:', req.params.id);
  console.log("fdwdw");
  const database = req.app.get('database');
  let client = database.Client;
  let pool = database.Pool;
  let displayValue = ""

  // client.query(schQuery, req.params.id, (err, res) => {
  //   console.log(err, res)
  //   displayValue = "Connected?"
  //   // client.end()
    
  // })
  let values = [req.params.id];
  // client.query(' INSERT INTO schedules(d) VALUES($1)',values, (err, res) => {

  //     console.log(err, res)
  //     displayValue = "Connected?"
  //     // client.end()
      
  //   })

  pool.connect((err,client,done) => {
    if(err) throw err
    client.query(schQuery,values,(err,res)=>{
      done()
      if(err){
        console.log(err.stack)
      }else{
        console.log(res.rows[0]);
        displayValue = res.rows[0];
      }
    })
  })
  
  
  //   client.query('SELECT * FROM schedules WHERE d=$1', [req.params.id], (err, res) => {
  //     console.log(err)
    
  //     console.log( res)
  //   // console.log(res.rows[0]);
  //   if(res.rows)
  //   displayValue = res.rows[0];

  //   // displayValue = 
  //       client.end()
  // })
  console.log(displayValue);
  // res.render('index', { title: displayValue});

  // next();
});

module.exports = router;
