const {OAuht2Client}=require('google-auth-library');
const CLIENT_ID='236842425131-insapaglakr212inlhpfdvc01thnotri.apps.googleusercontent.com';
googleAuth=(req,res)=>{
    console.log(req.headers,req.body, req.params);
    const{token}=req.body;
    const client = new OAuht2Client(CLIENT_ID);
    client.verifyIdToken({
        idToken:token,
        audience:CLIENT_ID
    }).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    });
}
module.exports={
    googleAuth
};