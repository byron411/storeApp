const express = require('express');
const cors= require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const mongoose=require('./database/conexion');
//const { createIndexes } = require('./database/productoSchema');
const producto= require('./database/productoSchema');
//app.route('/productos').get(getProductos).post(createProductos).put(modifyProductos).delete(deleteProductos);
//necesario para entender JSON que manda un cliente

const productosRouter=require('./routes/productosRoutes');
//app.use('/productos', productosRoutes);


//usuarios
const usuarioModelo=require('./database/usuarioSchema');
const productoRouter = require('./routes/productosRoutes');


//Select *
app.get('/productos',async(req,res)=>{
    const productos = await producto.find();
    console.log(productos);
    res.json(productos);
});

//Insert
app.post('/productos',async(req,res)=>{
       
    var {descripcion,valor_unitario, estado}=req.body;
    var nuevatarea= new producto({descripcion, valor_unitario,estado});
    nuevatarea.save();
    res.json({"status":"guardado"});
});

//Update
app.put('/productos/:id',async(req,res)=>{
    var {descripcion,valor_unitario, estado}=req.body;
    var nuevatarea={descripcion,valor_unitario, estado};
    await producto.findByIdAndUpdate(req.params.id, nuevatarea);
    res.json({"Status":"Modificado"});
});

//Delete
app.delete('/productos/:id',async(req,res)=>{
    await producto.findByIdAndDelete(req.params.id);
    res.json({"Status":"Eliminado"});
});

//Select by id
app.get('/productos/:id', async(req,res)=>{
    var buscar= await producto.findById(req.params.id);
    res.json(buscar);
});

//---------------------------------------se va----------------------
//Select de usuario
app.get('/usuarios',async(req,res)=>{
    res.json({mensaje:"aquí listar usuarios"});
});



//SErvidor en el pueto 5000
app.listen(5000,()=>{
    console.log('Ya esta el servidor corriendo');
});