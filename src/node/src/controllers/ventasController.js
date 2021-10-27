const express=require('express');
//const venta= require('../database/usuarioSchema');
listarVentas=('/',async(req,res)=>{
    //const usuarios = await usuario.find();
    //console.log(usuarios);
    res.json({msg:'aqui ventas'});
});
module.exports={
    listarVentas
}