import { Schema, model, Document } from "mongoose";

const Susuario = new Schema ({
    //"id":String,
    "cedula":Number,
    "nombre":String,
    "apellido":String,
    "edad":Number,
    "rol":String,
    "usuario":String,
    "password":String,
    "estado":Boolean
},{versionKey: false});

interface IUsuario extends Document{
    //"id":string;
    "cedula":number;
    "nombre":string;
    "apellido":string;
    "edad":number;
    "rol":string;
    "usuario":string;
    "password":string;
    "estado":boolean
}

export default model<IUsuario>("Usuarios", Susuario);
