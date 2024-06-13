const  jwt = require('jsonwebtoken');


const generate_token = (data) =>{
    const token = jwt.sign(data, process.env.SECRET_TOKEN, { expiresIn: '1h' });
    return token
}
const verify_token = (req,res,next)  =>{
    
    try {
        const token = req.headers?.authorization?.split(" ")[1];
    
    jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded) {
       
        if(err){
            
            return res.status(401).json({status:false, message:"unauthorize user"})
        }else{
            req.headers.email = decoded.email;
            next()
        }
      });
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false, message:"server error"})
    }
}



module.exports = {
    generate_token,
    verify_token
}