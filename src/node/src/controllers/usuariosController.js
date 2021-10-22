const express=require('express');
const usuario= require('../database/usuarioSchema');
listarUsuarios=('/',async(req,res)=>{
    const usuarios = await usuario.find();
    console.log(usuarios);
    res.json(usuarios);
});
crearUsuario=('/',(req,res)=>{
    //res.send("hola");
    const objeto=req.body;
    usuario.create(objeto);
    res.json({Msg:'creado'});
});

//Select by id
buscarUsuarioById=('/:id', async(req,res)=>{
    var buscar= await usuario.findById(req.params.id);
    res.json(buscar);
});

modificarUsuario=('/:id',async(req,res)=>{
    var {email,admin}=req.body;
    var nuevatarea={email,admin};
    await usuario.findByIdAndUpdate(req.params.id, nuevatarea);
    res.json({"Status":"Modificado"});
});

eliminarUsuario=('/:id',async(req,res)=>{
    await usuario.findByIdAndDelete(req.params.id);
    res.json({"Status":"Eliminado"});
});
module.exports={
    listarUsuarios,
    crearUsuario,
    buscarUsuarioById,
    modificarUsuario,
    eliminarUsuario
}