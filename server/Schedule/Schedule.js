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
    // createStoredData('09/30/2019');
    return newSchedule;

    // }
}
const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]


async function createStoredData(Data){

        const d = new Date(Data);
        const monthName = months[d.getMonth()];
        const dayName = days[d.getDay()];
        const formatted = `${dayName}, ${d.getDate()} ${monthName} ${d.getFullYear()}`
        
        const formattedDate = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
        console.log("dwdd")
        console.log(formattedDate);
}
const schedulePool = {}

exports.Schedule = createSchedule;
exports.SchPool = schedulePool;