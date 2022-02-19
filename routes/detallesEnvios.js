const { Router } = require("express");
const { 
        getdetallesEnvios,
        postdetallesEnvios,
        putdetallesEnvios,
        deletedetallesEnvios
} = require("../controles/detallesEnvios");

const router = Router();

        router.get('/', getdetallesEnvios)
        router.post('/',postdetallesEnvios)
        router.put('/',putdetallesEnvios)
        router.delete('/',deletedetallesEnvios)

module.exports = router
