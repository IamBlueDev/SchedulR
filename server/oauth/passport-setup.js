const passport = require('passport');

const FacebookStrat = require('passport-facebook').Strategy;
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const keys = require("../config");


module.exports = () =>{
  // Allowing passport to serialize and deserialize users into sessions
  // passport.serializeUser((user, cb) => cb(null, user))
  // passport.deserializeUser((obj, cb) => cb(null, obj))
  
  // The callback that is invoked when an OAuth provider sends back user 
  // information. Normally, you would save the user to the database 
  // in this callback and it would be customized for each provider
  const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile)
    
  passport.use( 
    new FacebookStrat({
            clientID: keys.Facebook.clientID,
            clientSecret: keys.Facebook.clientSecret,
            callbackURL: "/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'photos', 'email']
          }, callback));
         
          passport.use(new GoogleStrategy({
            clientID: keys.Google.clientID,
            clientSecret: keys.Google.clientSecret,
            callbackURL: "/auth/google/callback",
          
          },callback));


}