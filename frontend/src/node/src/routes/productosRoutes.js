const express=require('express');
const productoRouter = express.Router();
//const productoController=require('../controllers/productosController');
const producto= require('../database/productoSchema');


//productoRouter.route('/').get().post();


//Select *
productoRouter.get('/',async(req,res)=>{
    const productos = await producto.find();
    console.log(productos);
    res.json(productos);
});

//Insert
productoRouter.post('/',(req,res)=>{
    //res.send("hola");
    const objeto=req.body;
    producto.create(objeto);
    res.json({Msg:'creado'});
});

//Update
productoRouter.put('/:id',async(req,res)=>{
    var {descripcion,valor_unitario, estado}=req.body;
    var nuevatarea={descripcion,valor_unitario, estado};
    await producto.findByIdAndUpdate(req.params.id, nuevatarea);
    res.json({"Status":"Modificado"});
});

//Delete
productoRouter.delete('/:id',async(req,res)=>{
    await producto.findByIdAndDelete(req.params.id);
    res.json({"Status":"Eliminado"});
});

//Select by id
productoRouter.get('/:id', async(req,res)=>{
    var buscar= await producto.findById(req.params.id);
    res.json(buscar);
});




module.exports=productoRouter;