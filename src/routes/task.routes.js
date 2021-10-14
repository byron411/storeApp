//importamos express para utilizar el módulo de rutas
const express =require('express');
//Es el módulo de rutas
const router=express.Router();

//Utilizamos nuestro esquema de productos
const Producto= require('../models/task')

//Select
router.get('/',async(req,res)=>{
    const productos = await Producto.find();
    console.log(productos);
    res.json(productos);
});

//Insert
router.post('/',async(req,res)=>{
       
    var {descripcion,valor_unitario, estado}=req.body;
    var nuevatarea= new Producto({descripcion, valor_unitario,estado});
    nuevatarea.save();
    res.json({"status":"guardado"});
});

//Update
router.put('/:id',async(req,res)=>{
    var {descripcion,valor_unitario, estado}=req.body;
    var nuevatarea={descripcion,valor_unitario, estado};
    await Producto.findByIdAndUpdate(req.params.id, nuevatarea);
    res.json({"Status":"Modificado"});
});

//Delete
router.delete('/:id',async(req,res)=>{
    await Producto.findByIdAndDelete(req.params.id);
    res.json({"Status":"Eliminado"});
});


//SelectById
router.get('/:id', async(req,res)=>{
    var buscar= await Producto.findById(req.params.id);
    res.json(buscar);
});

module.exports=router;