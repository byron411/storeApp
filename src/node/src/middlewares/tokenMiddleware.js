const jwt=require('jsonwebtoken');
verifyToken=(req,res, next)=>{
    const {token}=req.headers;
    console.log('este  es mi middleware',token);
    jwt.verify(token, 'miClave',function(err, decoded){
        if(err){
            console.log('hubo error verficar el token')
            res.status(401).send('No autorizado');
            return;
        }
        console.log(decoded)
    });
    next();
};

module.exports={verifyToken};