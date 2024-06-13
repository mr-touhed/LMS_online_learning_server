const { generate_token } = require("../utils/jwt")

const send_token = async (req,res) =>{
    const {email} = req.body
    try {
        const token = generate_token({email})
      
        return res.status(200).json({status:true, token:token})
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    send_token
}