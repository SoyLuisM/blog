const express = require('express');
const path = require('path');
const user = require('../components/api/user/network');

const router = function (server) {
    server.use('/user',user);
    server.get('/',(req,res)=>{
        res.render('index');
    });
    server.use('/app', express.static(path.join(__dirname,'../public')));
    server.use('/assets', express.static(path.join(__dirname,'../public/css')));
    server.use('/img', express.static(path.join(__dirname,'../public/files')));
    server.use('/scripts', express.static(path.join(__dirname,'../public/scripts')));
}

module.exports = router