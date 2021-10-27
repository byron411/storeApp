const mongoose=require('mongoose');

//Se conecta a la base de datos 'saleapp' si no existe la crea
//const URI='mongodb://localhost/saleapp';
//const URI='mongodb+srv://minticuser:minticpassword@clustermintic.deeup.mongodb.net/minticdb?retryWrites=true&w=majority';
const URL=process.env.DB_URL;
/*
*Mostramos un mensaje por consola si se ha conectado, si no mostramos el mensaje de error
*/
mongoose.connect(URL)
    .then(db=> console.log('Se ha conectado a la base de datos'))
    .catch(err=> console.error(err));//

module.exports=mongoose;