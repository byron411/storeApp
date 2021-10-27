const express=require('express');
const ventaRouter = express.Router();
const ventaController=require('../controllers/ventasController');
//const tokenMiddleware = require('../middlewares/tokenMiddleware');

//antes de pasar a las rutas pasa por la verificación del token
//usuarioRouter.use(tokenMiddleware.verifyToken);


ventaRouter.route('/').get(ventaController.listarVentas);

module.exports=ventaRouter;