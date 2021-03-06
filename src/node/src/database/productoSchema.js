const mongoose=require('mongoose');

//Utilizamos modulo Schema de mongoose para difinir una tabla u objeto Json
const {Schema}=mongoose;

/*
*Define el esqueme del objeto producto
*descripcion: Cadena de caracteres, es obligatorio
*valor_unitario: Decimal, es obligatorio
*estado: Cadena de caracters, es obligatorio
*/
const ProductoSchema=new Schema({
    descripcion:{type:String, required:true},
    valor_unitario:{type:Number, required:true},
    estado:{type:Boolean, default:1}    
});

module.exports=mongoose.model('Producto',ProductoSchema);