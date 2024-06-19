const mysql = require('mysql2');

const dbpool =mysql.createPool
({
  host: "localhost",
  user: "dba",
  database: "PickArt",
  password: "dbaPass"
});

dbpool.getConnection((err,conn)=>{
    if(err) console.log(err)
    console.log("MySQL conected!\n")
})
module.exports =dbpool.promise()