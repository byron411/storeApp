import { Schema, model, Document } from "mongoose";

const Sventa = new Schema ({
    //"id":String,
    "idpventa":Number,
    "cliente":String,
    "valor":Number,
    "fecha":Date
},{versionKey: false});

interface IVenta extends Document{
    //"id":string;
    "idpventa":number;
    "cliente":string;
    "valor":number;
    "fecha":Date
}

export default model<IVenta>("Ventas", Sventa);
