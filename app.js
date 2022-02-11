require('dotenv').config()

const Server = require('./models/server')
const server = new Server();
server.listen();

//const express = require ('express')
//const app = express()

//app.get('/', function(req,res) {
 //res.send('Programa corriendo con normalidad')
//})

//app.listen (process.env.PORT, ()=>{
    //    console.log("El puerto esta corriendo en el puerto TCP" +process.env.PORT)
//})