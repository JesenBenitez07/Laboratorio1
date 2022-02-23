const { Router } = require('express');
const { 
        getenvio,
        postenvio,
        putenvio,
        deleteenvio
} = require("../controllers/envio");

const router = Router();

        router.get('/', getenvio)
        router.post('/',postenvio)
        router.put('/:id',putenvio)
        router.delete('/:id',deleteenvio) 

module.exports = router