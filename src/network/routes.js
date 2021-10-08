const express = require('express');
const path = require('path');

const router = function (server) {
    server.get('/',(req,res)=>{
        res.send('holaaaa');
    });
    server.use('/app', express.static('./src/public'));
}

module.exports = router