import { Router } from "express";
import { actualizarProducto, crearProducto, eliminarProducto, obtenerProducto, obtenerProductoId } from "./controllers/producto.controller";
import { obtenerUsuarioId, obtenerUsuarios, crearUsuario, eliminarUsuario, actualizarUsuario } from "./controllers/usuario.controller";
import { actualizarVenta, crearVenta, eliminarVenta, obtenerVenta, obtenerVentaId } from "./controllers/venta.controller";

const router : Router = Router();

//router usuario
router.route("/usuarios").get(obtenerUsuarios);
router.route("/usuario/:id")
    .get(obtenerUsuarioId)
    .delete(eliminarUsuario)
    .put(actualizarUsuario);
router.route("/usuario").post(crearUsuario);


//router producto
router.route("/producto").get(obtenerProducto);
router.route("/producto/:id")
    .get(obtenerProductoId)
    .delete(eliminarProducto)
    .put(actualizarProducto);
router.route("/producto").post(crearProducto);


//router venta
router.route("/venta").get(obtenerVenta);
router.route("/venta/:id")
    .get(obtenerVentaId)
    .delete(eliminarVenta)
    .put(actualizarVenta);
router.route("/venta").post(crearVenta);

export default router;


