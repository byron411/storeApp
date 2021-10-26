const express=require('express');
const usuarioRouter = express.Router();
const usuarioController=require('../controllers/usuariosController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

//antes de pasar a las rutas pasa por la verificación del token
//usuarioRouter.use(tokenMiddleware.verifyToken);


usuarioRouter.route('/').get(usuarioController.listarUsuarios).
post(usuarioController.crearUsuario);
usuarioRouter.route('/:id').
put(usuarioController.modificarUsuario).
delete(usuarioController.eliminarUsuario).
get(usuarioController.buscarUsuarioById);

module.exports=usuarioRouter;