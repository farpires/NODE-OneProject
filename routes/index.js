const express = require('express');
const router =  express.Router();

//para exportat las rutas al index general
module.exports = function(){
    
    router//ruta para home
    router.get('/',(res,resp)=>{
        resp.send('index');
    });
    router.get('/nosotros',(res,resp)=>{
        resp.send('nosotros');
    });

    router.get('/block',(res,resp)=>{
        resp.send('block');
    }); 


    router.get('/contactos',(res,resp)=>{
        resp.send('contsctatanos');
    });
    return router;
}
