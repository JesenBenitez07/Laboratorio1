const { Route } = require('express');
const { 
        getenvio,
        postenvio,
        putenvio,
        deleteenvio
} = require("../controllers/envio");

const route = Route();

        route.get('/', getenvio)
        route.post('/',postenvio)
        route.put('/:id',putenvio)
        route.delete('/:id',deleteenvio)

module.exports = route