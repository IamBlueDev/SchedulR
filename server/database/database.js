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

  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'toor',
    port: 5432,
  })

const Contains = async (table,data) =>{
    let displayValue = false;
    const schQuery = {
        // text: 'SELECT * FROM information_schema.columns'
        // text:'SELECT * FROM public."user" WHERE "UserID" IN (VALUES($1));'
        text:'SELECT * FROM public."'+table+'" WHERE "'+data[0]+'" IN (VALUES($1));'
        // text: 'SELECT * FROM public."'+table+'" WHERE ('+'$1'+'= '+'$2'+')'
      }
      const values = [data[1]]
      const client = await pool.connect();
      try{
          const res = await client.query(schQuery,values)
          if(res.rows.length > 0)
          displayValue = res.rows[0];
          else
          displayValue = false
      }finally{
          client.release();
      }

    return displayValue;
}

const AddEntry = async (table,entry)=>{
    let displayValue = false;
    let Query  ={}
    let values =[]
    if(table =="Schedule"){
      Query = {
        // text: 'SELECT * FROM information_schema.columns'
        text: 'INSERT INTO public."Schedule"("SchID","Name","Owner","Permissions") VALUES($1,$2,$3,$4)'
      }
      values = [entry[0],entry[1],entry[2],'Private']

    }else{

      Query = {
          name: 'create-User',
          // text: 'SELECT * FROM information_schema.columns'
          text: 'INSERT INTO public."user"("UserID","DisplayName","Email","Picture","ScheduleID") VALUES($1,$2,$3,$4,$5)'
        }
         values = [entry[0],entry[1],entry[2],entry[3],entry[4]]
    }
    const client = await pool.connect();
    try{
        const res = await client.query(Query,values)
        // console.log(Query);
        console.log(res);
        if(res.rowCount > 0){
        displayValue = values;
        console.log("DATA INPUTTED SUCESSFULLY")
        }else{
        console.log("DATA NOT SUCESSFULLY INSERTTED") 
        
        displayValue = false,values;
        }
    }finally{
        client.release();
    }
    return displayValue;
}

function toObject(data){
  console.log(data);
  return {"UserID":data[0],"DisplayName":data[1],"Email":data[2],"Picture":data[3],"ScheduleID:":data[4]}
}

exports.Contains = Contains;
exports.addEntry = AddEntry;

exports.Client = client;
exports.Pool = pool;