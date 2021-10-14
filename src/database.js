//Importamos mongoose para la conexión con MondgoDB en local
const mongoose=require('mongoose');

//Se conecta a la base de datos 'saleapp' si no existe la crea
const URI='mongodb://localhost/saleapp';

/*
*Mostramos un mensaje por consola si se ha conectado, si no mostramos el mensaje de error
*/
mongoose.connect(URI)
    .then(db=> console.log('Se ha conectado a la base de datos'))
    .catch(err=> console.error(err));

module.exports=mongoose;