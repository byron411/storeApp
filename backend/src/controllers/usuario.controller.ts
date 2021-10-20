import { Request, Response } from "express";
import model from "../models/usuario.models";

export async function obtenerUsuarios(req:Request,res:Response):Promise <Response> {
    const usuarios = await model.find();

    return res.json(usuarios);
}

export async function obtenerUsuarioId(req:Request,res:Response):Promise <Response>{
    const usuario =  await model.findById(req.params.id);
    return res.json(usuario);
}
 
export async function crearUsuario(req:Request,res:Response): Promise <Response> {
    let {cedula, nombre, apellido,edad,rol,usuario,password,estado} =req.body;

    let nuevoUsuario ={
        cedula:cedula, 
        nombre:nombre, 
        apellido:apellido,
        edad:edad,
        rol:rol,
        usuario:usuario,
        password:password,
        estado:estado
    };

    const usuarioN= new model(nuevoUsuario);

    await usuarioN.save();

    return res.json({
        message:"User succesfully saved",
        usuarioN
    });

}

export async function eliminarUsuario(req:Request,res:Response):Promise <Response>{
    const eliminarusuario =  await model.findByIdAndRemove(req.params.id);
    return res.json({message:"User deleted", eliminarusuario});
}

export async function actualizarUsuario(req:Request,res:Response):Promise <Response>{
    
    const {nombre, apellido,edad,rol,usuario,password,estado} =req.body;

    const actualizarusuario =  await model.findByIdAndUpdate(req.params.id,
        {
            nombre:nombre, 
            apellido:apellido,
            edad:edad,
            rol:rol,
            usuario:usuario,
            password:password,
            estado:estado
        }, {new: true});

    return res.json({message:"Successfully updated", actualizarusuario});
}
