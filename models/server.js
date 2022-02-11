const express = require ('express');

class Server {
    constructor(){
        this.app = express()
        this.routes();
    }

    routes(){
        this.app.get('/precios',(req, res)=> res.send('GET Endpoint para Precios'))
        this.app.post('/precios',(req, res)=> res.send('POST Endpoint para Precios'))
        this.app.put('/precios',(req, res)=> res.send('PUT Endpoint para Precios'))
        this.app.delete('/precios',(req, res)=> res.send('DELETE Endpoint para Precios'))

        this.app.get('/paquete',(req, res)=> res.send('GET Endpoint para Precios'))
        this.app.post('/paquete',(req, res)=> res.send('POST Endpoint para Precios'))
        this.app.put('/paquete',(req, res)=> res.send('PUT Endpoint para Precios'))
        this.app.delete('/paquete',(req, res)=> res.send('DELETE Endpoint para Precios'))

        this.app.get('/envio',(req, res)=> res.send('GET Endpoint para Precios'))
        this.app.post('/envio',(req, res)=> res.send('POST Endpoint para Precios'))
        this.app.put('/envio',(req, res)=> res.send('PUT Endpoint para Precios'))
        this.app.delete('/envio',(req, res)=> res.send('DELETE Endpoint para Precios'))

        this.app.get('/detallesEnvios',(req, res)=> res.send('GET Endpoint para Precios'))
        this.app.post('/detallesEnvios',(req, res)=> res.send('POST Endpoint para Precios'))
        this.app.put('/detallesEnvios',(req, res)=> res.send('PUT Endpoint para Precios'))
        this.app.delete('/detallesEnvios',(req, res)=> res.send('DELETE Endpoint para Precios'))

        this.app.get('/seguimiento',(req, res)=> res.send('GET Endpoint para Precios'))
        this.app.post('/seguimiento',(req, res)=> res.send('POST Endpoint para Precios'))
        this.app.put('/seguimiento',(req, res)=> res.send('PUT Endpoint para Precios'))
        this.app.delete('/seguimiento',(req, res)=> res.send('DELETE Endpoint para Precios'))
        }

    listen(){
        this.app.listen(process.env.PORT, ()=>
        console.log("El puerto esta corriendo en el puerto TCP" +process.env.PORT))
    }
}

module.exports = Server