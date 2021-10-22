const mongoose=require('mongoose');

//Utilizamos modulo Schema de mongoose para difinir una tabla u objeto Json
const {Schema}=mongoose;


const UsuarioSchema=new Schema({
    email:String,
    admin:{type:Boolean, required:true,default:0}    
});

module.exports=mongoose.model('Usuario',UsuarioSchema);