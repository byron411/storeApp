import express, { Application } from "express";
import router from "./routes";
const app : Application = express();

export default app;

//properties
app.set("port",4444);

app.set("uri","mongodb+srv://minticuser:minticpassword@clustermintic.deeup.mongodb.net/minticdb?retryWrites=true&w=majority")

//middelware
app.use(express.json());

//routes
app.use("/",router);

