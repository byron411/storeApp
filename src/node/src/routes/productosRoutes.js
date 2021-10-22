const express=require('express');
const productoRouter = express.Router();
//const productoController=require('../controllers/productosController');
//const producto= require('../database/productoSchema');
const productoController= require('../controllers/productosController')



productoRouter.route('/').get(productoController.listarProductos).
post(productoController.agregarProducto);
productoRouter.route('/:id').
put(productoController.modificarProducto).
delete(productoController.eliminarProducto).
get(productoController.buscarProductoById);

/*
productoRouter.get('/', productoController.listarProductos);
productoRouter.post('/', productoController.agregarProducto);
productoRouter.put('/:id', productoController.modificarProducto);
productoRouter.delete('/:id', productoController.eliminarProducto);
productoRouter.get('/:id', productoController.buscarProductoById);*/





module.exports=productoRouter;