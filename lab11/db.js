const mysql=require('mysql');
const express=require('express');
var app=express();
const parser=require('body-parser');
const res = require('express/lib/response');
const { rows } = require('mssql');
app.use(parser.json());
var connection=mysql.createConnection(
{
host:'localhost',
user:'root',
password:'',
database:'database'

});

connection.connect((err)=>{
    if(!err)
    console.log('success');
    else
    console.log('not success');
})
app.listen(8000,()=>console.log('sever startes at 8000...'));
app.get('/branches',(req,res)=>
{
connection.query('SELECT * FROM branches',(err,rows,fields)=>{

if(!err)
res.send(rows);
else
console.log('erro');

})

})

app.get('/branches',(req,res)=>
{
connection.query('SELECT * FROM branches',(err,rows,fields)=>{

if(!err)
res.send(rows);
else
console.log('erro');

})

})
app.get('/branches/:id',(req,res)=>
{
connection.query('SELECT * FROM branches where id=?',[req.params.id],(err,rows,fields)=>{

if(!err)
res.send(rows);
else
console.log('erro');

})

})



