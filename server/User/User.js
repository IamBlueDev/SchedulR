var database = require('../database/database');
var schdule = require('../Schedule/Schedule');
var idGen = require('../util/math/stringGenerator');


        /*  createUSER()
            > Check to see if email is already, else move on.
            > Contact the database to see if UserID is already in use, if it is generate new 4 Hash.
            > Once done, create a defaultSchdule template to show off the features.

        */

async function createUSER(Name,Email,Picture,ID){
    // let ID = ID;
    // let Name = Name;
    // let Email = Email;
    // let Schdules = [];
    // let Picture; 
    if(!ID)
     ID = await idGen.makeID(6,"User");
    
    const email = await database.Contains("user",["Email",Email]);
    
    if(email){
        
        return "Email already in use. |"+ Email; 
    }
    
    const res = await database.Contains("user",["UserID",ID]);
    if(res){
        // const defaultSch = await schdule.Schedule("Welcome",ID);
        return res;
    }else{
    const newUser = await database.addEntry("user",[ID,Name,Email,Picture])
    const defaultSch = await schdule.Schedule("Welcome",ID);

        UserPool.push({"Data": newUser,"Update":45});
    return newUser;
    }
}


/*  onUserLogon()
    > Push Data to an array which contains 'currently' logged in users
    > Array Structure:
    > Data (Contains User info ID, DisplayName, Email,Picture)
    > Update ( Data Refresh Timer default is 45 seconds)

*/
function onUserLogon(Identity,email){
    UserPool.push({"Data" : {ID: Identity,Email:email},"Update":45})
}

function User(ID,Name,Email,Picture) {
    this.iD = ID;
    this.name = Name;
    this.email = Email;
    this.schdules = [];
    this.picture= Picture; 
}
const UserPool = [];
exports.USER = createUSER;
exports.Pool = UserPool;