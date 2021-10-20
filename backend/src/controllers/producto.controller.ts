import { Request, Response } from "express";
import model from "../models/producto.models";

export async function obtenerProducto(req:Request,res:Response):Promise <Response> {
    const productos = await model.find();

    return res.json(productos);
}

export async function obtenerProductoId(req:Request,res:Response):Promise <Response>{
    const producto =  await model.findById(req.params.id);
    return res.json(producto);
}

export async function crearProducto(req:Request,res:Response): Promise <Response> {

    let {idproducto, name, descripcion,disponible } =req.body;

    let nuevoProductos ={
        idproducto:idproducto, 
        name:name, 
        descripcion:descripcion,
        disponible:disponible
    };

    const producto= new model(nuevoProductos);

    await producto.save();

    return res.json({
        message:"product succesfully saved",
        producto
    });

}

export async function eliminarProducto(req:Request,res:Response):Promise <Response>{
    const eliminarproducto =  await model.findByIdAndRemove(req.params.id);
    return res.json({message:"product deleted", eliminarproducto});
}

export async function actualizarProducto(req:Request,res:Response):Promise <Response>{
    const {name, descripcion,disponible}=req.body;
    const actualizarproducto =  await model.findByIdAndUpdate(req.params.id,{
        name, 
        descripcion,
        disponible
    }, {new: true});

    return res.json({message:"Successfully updated", actualizarproducto});
}
