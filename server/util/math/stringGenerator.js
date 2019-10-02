var database = require('../../database/database');


async function makeID(length,typ){

    let gen = await generateString(length);
    const userCheck = await database.Contains("user",["UserID",gen]);
    const schCheck = await database.Contains("Schedule",["SchID",gen]);
    const storedCheck = await database.Contains("StoredSchedule",["StoredID",gen]);
    const slotCheck = await database.Contains("TimeSlots",["SlotID",gen]);

    if(typ == "User"){
        if(userCheck){
        gen = await generateString(length);
        }
    }
    if(typ =="Sch"){
        if(schCheck){
            gen = await generateString(length);
            }
    }
    if(typ =="StSch"){
        if(storedCheck){
            gen = await generateString(length);
            }
    }
    if(typ =="Slot"){
        if(slotCheck){
            gen = await generateString(length);
            }
    }

    return gen;
    
    
    
}


async function generateString(length){
    var result           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

    return result;
}

exports.makeID = makeID; 