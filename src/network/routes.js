const express = require('express');
const path = require('path');

const router = function (server) {
    server.get('/',(req,res)=>{
        res.send('holaaaa');
    });
    server.use('/app', express.static(path.join(__dirname,'../public')));
}

module.exports = router