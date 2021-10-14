//Importamos expres para ayudar en la creación del servidor
const express = require('express');

//Para el servidor
const app= express();

//Para mostrar peticiones del cliente en consola
const morgan = require('morgan');

//Para obtener un path global
const path =require('path');

//Utilizamos la conexión a la base de datos
const {mongoose}=require('./database');


//Settings: Tome el puerto por defecto o 3000 en su lugar
app.set('port', process.env.PORT || 3000);

//Middlewares: Mostramos solicitudes y respuestas del servidor. Interacción cliente-servidor con objetos Json
app.use(morgan('dev'));
app.use(express.json());

//Routes: Ruta para administrar productos
app.use('/api/admin',require('./routes/task.routes'));

//Static files: Cargamos el html inicial de la carpeta public
app.use(express.static(path.join(__dirname,'public')));



//Start the server: Escuche en el puerto por defecto
app.listen(app.get('port'),()=> {
    console.log('Servidor en el puerto '+app.get('port'));
});
