var database = require('../database/database');
var idGen = require('../util/math/stringGenerator');

async function createSchedule(Name,Owner){
    // let ID = ID;
    // let Name = Name;
    // let Email = Email;
    // let Schdules = [];
    // let Picture; 
    // if(schedulePool)
    const ID = await idGen.makeID(6,"Sch");
    // const res = await database.Contains("Schedule",["SchID",ID]);
    // if(res){
    //     // console.log(res);
    //     console.log("Contains Schedule entry")
    //     return res;
    // }else{
        // [ID:2313] [Monday,2/10/19,[..TimeSlots]]
    const newSchedule = await database.addEntry("Schedule",[ID,Name,Owner])
    console.log("DoesntContainShit");
    createStoredData();
    return newSchedule;
    // }
}

async function createStoredData(){
        // const StoredID = await idGen.makeID(12,"StSch")
        console.log(Date());
}
const schedulePool = {}

exports.Schedule = createSchedule;
exports.SchPool = schedulePool;