const express=require('express');
const usuarioRouter = express.Router();
const usuarioController=require('../controllers/usuariosController');


usuarioRouter.route('/').get(usuarioController.listarUsuarios).
post(usuarioController.crearUsuario);
usuarioRouter.route('/:id').
put(usuarioController.modificarUsuario).
delete(usuarioController.eliminarUsuario).
get(usuarioController.buscarUsuarioById);

module.exports=usuarioRouter;