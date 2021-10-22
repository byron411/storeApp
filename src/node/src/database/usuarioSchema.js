const mongoose=require('mongoose');

//Utilizamos modulo Schema de mongoose para difinir una tabla u objeto Json
const {Schema}=mongoose;


const UsuarioSchema=new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    admin:{type:Boolean, required:true,default:false}    
});

module.exports=mongoose.model('Usuario',UsuarioSchema);