import { connect } from "mongoose";
import app from "./app";

export async function startConnection(){

    await connect(app.get("uri"),{
    });

    console.log('Database is connected');

}