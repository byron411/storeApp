//Importamos expres para ayudar en la creación del servidor
const express = require('express');
//Para el servidor
const app= express();
//Para mostrar peticiones del cliente en consola
const morgan = require('morgan');
//Para obtener un path global
const path =require('path');



//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/admin',require('./routes/task.routes'));

//Static files: Cargamos el html inicial de la carpeta public
app.use(express.static(path.join(__dirname,'public')));



//Start the server
app.listen(app.get('port'),()=> {
    console.log('Servidor en el puerto '+app.get('port'));
});
