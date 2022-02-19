//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

const mysql=require('mysql2');
const express = require('express')
const http = require('http');
const path = require("path");
var cors = require('cors')
const app = express()
const server = http.createServer(app);
app.use(cors())


var connection=mysql.createConnection(
  {
    host:'localhost',
    user:'root',
    password:'sanchit',

   database:'Vehicle'

  
  });




connection.connect((err)=>{
  if(!err)
  console.log('mysql connected');
  else
  console.log(err);
})


app.get('/instructor', (req, res) => {
  connection.query('SELECT * FROM sellers',(err,rows,fields)=>{
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try{
        console.log(rows)
        res.json({instructor : rows})
        
    }catch (err) {
        console.log('error parsing JSON',err)
    }
    }); 
});

server.listen(3000, function(){
  console.log("server is listening on port: 3000");
});