// Network de user
const express = require('express');

const controller = require('.');

const router = express.Router();

router.post('/', crearUsuario);

function crearUsuario(req,res){
    controller.insert(req.body)
        .then((data) =>{
            res.status(200).send({
                error: false,
                status: 200,
                body: data
            });
        }).catch((err)=>{
            res.status(200).send({
                error: false,
                status: 500,
                body: err,
          })
        });
}

module. exports = router;
