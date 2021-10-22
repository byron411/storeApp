const express=require('express');
const producto= require('../database/productoSchema');



//Select *
listarProductos=('/',async(req,res)=>{
    const productos = await producto.find();
    console.log(productos);
    res.json(productos);
});

//Insert
agregarProducto=('/',(req,res)=>{
    //res.send("hola");
    const objeto=req.body;
    producto.create(objeto);
    res.json({Msg:'creado'});
});

//Update
modificarProducto=('/:id',async(req,res)=>{
    var {descripcion,valor_unitario, estado}=req.body;
    var nuevatarea={descripcion,valor_unitario, estado};
    await producto.findByIdAndUpdate(req.params.id, nuevatarea);
    res.json({"Status":"Modificado"});
});

//Delete
eliminarProducto=('/:id',async(req,res)=>{
    await producto.findByIdAndDelete(req.params.id);
    res.json({"Status":"Eliminado"});
});

//Select by id
buscarProductoById=('/:id', async(req,res)=>{
    var buscar= await producto.findById(req.params.id);
    res.json(buscar);
});

module.exports={
    listarProductos,
    agregarProducto,
    modificarProducto,
    eliminarProducto,
    buscarProductoById
}
