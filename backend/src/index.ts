import app from "./app";
import {startConnection} from './database';

async function main (){
    startConnection();

    console.log("Starting app...");
    await app.listen(app.get("port"));
    console.log("listening on port",app.get("port"));    
}

main();