var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../User/User');
/* GET home page. */
router.get('/',  function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const facebookAuth = passport.authenticate('facebook', {scope : ['email']});
// const googleAuth = passport.authenticate('facebook', {scope : ['email']});

const googleAuth =  passport.authenticate('google', { scope: 
  [ 'https://www.googleapis.com/auth/plus.login',
  , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] });
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
  console.log("Attached socket id")
  // console.log(req.query.socket)
  if(req.query.socket)
  req.session.socket = req.query.socket

  // console.log(req.session)

  next()
})

router.get('/wake-up', (req,res)=>{
  res.send("ok")
})

router.get('/auth/facebook/callback',facebookAuth, async (req,res)=>{
  // console.log(req);Y
    const database = req.app.get('database');
    const userObj = req.user._json;
    const io = req.app.get('io')
    // console.log(req.session);
    let result = await database.Contains("user",["UserID",userObj.id]);
    if(!result){
      result = await User.User(userObj.name,userObj.email,userObj.picture.data.url,userObj.id)
    }
    io.in(req.session.socket).emit('facebook', result)
    res.send(result);
    console.log("callback");
})

router.get('/auth/google/callback',googleAuth, async (req,res)=>{
    const database = req.app.get('database');
    const userObj = req.user._json;
    const io = req.app.get('io')

    let result = await database.Contains("user",["UserID",userObj.sub]);
    if(!result){
      result = await User.User(userObj.name,userObj.email,userObj.picture,userObj.sub)
    }
    io.in(req.session.socket).emit('google', result)
    res.send(result);
})

router.get('/auth/facebook',facebookAuth);
router.get('/auth/google',googleAuth);

module.exports = router;
