import { Request, Response } from "express";
import model from "../models/venta.models";

export async function obtenerVenta(req:Request,res:Response):Promise <Response> {
    const ventas = await model.find();

    return res.json(ventas);
}

export async function obtenerVentaId(req:Request,res:Response):Promise <Response>{
    const venta =  await model.findById(req.params.id);
    return res.json(venta);
}

export async function crearVenta(req:Request,res:Response): Promise <Response> {
    let {idpventa,cliente,valor,fecha} =req.body;

    
    let nuevaVenta ={
        idpventa:idpventa,
        cliente:cliente,
        valor:valor,
        fecha:fecha
    };

    const venta= new model(nuevaVenta);

    await venta.save();

    return res.json({
        message:"Venta succesfully saved",
        venta
    });

}

export async function eliminarVenta(req:Request,res:Response):Promise <Response>{
    const eliminarventa =  await model.findByIdAndRemove(req.params.id);
    return res.json({message:"venta deleted", eliminarventa});
}

export async function actualizarVenta(req:Request,res:Response):Promise <Response>{
    const {cliente,valor,fecha}=req.body;
    const actualizarventa =  await model.findByIdAndUpdate(req.params.id,{
        cliente,
        valor,
        fecha
    }, {new: true});

    return res.json({message:"Successfully updated", actualizarventa});
}
