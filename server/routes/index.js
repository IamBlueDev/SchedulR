var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../User/User');
/* GET home page. */
router.get('/',  function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const facebookAuth = passport.authenticate('facebook', {scope : ['email']});

router.use((req, res, next) => {
  req.session.socketId = req.query.socketId
  next()
})


router.get('/auth/facebook/callback',facebookAuth, async (req,res)=>{
  // console.log(req);
    const database = req.app.get('database');
    const userObj = req.user._json;
    let result = await database.Contains("user",["UserID",userObj.id]);
    if(!result){
      result = await User.User(userObj.name,userObj.email,userObj.picture.data.url,userObj.id)
    }
    res.send(result);
    // res.render('index', { title: 'User with name ' + userObj.name });
    // console.log(result);
    console.log("callback");
})

router.get('/auth/facebook',facebookAuth);

module.exports = router;
