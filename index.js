const express = require('express');
//prueba de cambio 
const router = require('./src/network/routes');
const { config } = require('./config');

const app = express();

router(app);

app.listen(config.port, ()=>{
    console.log(`escuchando en el puerto: ${config.port}`);
});
