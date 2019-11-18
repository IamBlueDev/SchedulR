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

router.get('/:id', async function (req, res, next) {
    const database = req.app.get('database');
    let values = [req.params.id];
    let result = await database.getSchedule(values)

    res.send("hello");
});

module.exports = router;
