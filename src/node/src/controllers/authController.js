//const {OAuht2Client}=require('google-auth-library');
//const CLIENT_ID='236842425131-insapaglakr212inlhpfdvc01thnotri.apps.googleusercontent.com';
const {OAuth2Client}=require('google-auth-library');
const jwt=require('jsonwebtoken');
const CLIENT_ID=process.env.CLIENT_ID;
const usuariomodelo=require('../database/usuarioSchema');
const JWT_KEY=process.env.JWT_KEY;
googleAuth=(req,res)=>{
   console.log('este es el body',req.body);
   const {token}= req.body;
   console.log('este el body por diccionario',token);
   const cliente=new OAuth2Client(CLIENT_ID);
   cliente.verifyIdToken({idToken:token, audience:CLIENT_ID})
   .then(respuesta=>{
       console.log(respuesta);
       const {name,email}=respuesta.payload;
       console.log(name,email);
       //guardamos en la base de datos
       //busca un objeto con elmismo email si lo encuentra solo le modifica el nombre
       //si no existe lo crea si existe modifica solo nombre
        return usuariomodelo.findOneAndUpdate({email: email},{name:name},{new:true, upsert:true});
   }).then(usuario=>{
       console.log(usuario);
       const appToken=jwt.sign({user:usuario}, JWT_KEY, {expiresIn:'1h'});
       res.json(appToken);
   })
   .catch(err=>{
       console.log(err);
       res.status(500).send(err);
   });


}
module.exports={googleAuth};