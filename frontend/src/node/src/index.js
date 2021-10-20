const express = require('express');
const cors= require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const mongoose=require('./database/conexion');
//const { createIndexes } = require('./database/productoSchema');

//app.route('/productos').get(getProductos).post(createProductos).put(modifyProductos).delete(deleteProductos);
//necesario para entender JSON que manda un cliente

const productosRouter=require('./routes/productosRoutes');
app.use('/productos', productosRouter);


//usuarios
const usuarioModelo=require('./database/usuarioSchema');
const productoRouter = require('./routes/productosRoutes');



//---------------------------------------se va----------------------
//Select de usuario
app.get('/usuarios',async(req,res)=>{
    res.json({mensaje:"aquí listar usuarios"});
});



//SErvidor en el pueto 5000
app.listen(5000,()=>{
    console.log('Ya esta el servidor corriendo');
});