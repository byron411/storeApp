import { Schema, model, Document } from "mongoose";

const Sproducto = new Schema ({
    //"id":String,
    "idproducto":Number,
    "name":String,
    "descripcion":String,
    "disponible":Boolean
},{versionKey: false});

interface IProducto extends Document{
    //"id":string;
    "idproducto":number;
    "name":string;
    "descripcion":string;
    "disponible":boolean
}

export default model<IProducto>("Productos", Sproducto);
