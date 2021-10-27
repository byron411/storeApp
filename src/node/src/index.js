const express = require('express');
const cors= require('cors');
const app = express();


//Middlewo
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV !== 'production'){
    console.log('No estamos en producción');
    require('dotenv').config();
    console.log('el proceso putno env:',process.env.PORT);//
}

const mongoose=require('./database/conexion');
//const { createIndexes } = require('./database/productoSchema');

//app.route('/productos').get(getProductos).post(createProductos).put(modifyProductos).delete(deleteProductos);
//necesario para entender JSON que manda un cliente

const productosRouter=require('./routes/productosRoutes');
app.use('/productos', productosRouter);

//usuarios
const usuariosRouter=require('./routes/usuariosRoutes');
app.use('/usuarios',usuariosRouter);

//auth 
const authRouter=require('./routes/authRouter');
app.use('/auth',authRouter);

//ventas
const ventasRouter=require('./routes/ventasRouter');
app.use('/ventas',ventasRouter);




//SErvidor en el pueto 5000
app.listen(process.env.PORT || 5000,()=>{
    console.log('Ya esta el servidor corriendo');
});