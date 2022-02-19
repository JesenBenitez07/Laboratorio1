const { Router } = require("express");
const { 
        getenvio,
        postenvio,
        putenvio,
        deleteenvio
} = require("../controles/envio");

const router = Router();

        router.get('/', getenvio)
        router.post('/',postenvio)
        router.put('/',putenvio)
        router.delete('/',deleteenvio)

module.exports = router