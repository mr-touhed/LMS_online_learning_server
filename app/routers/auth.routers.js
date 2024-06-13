const express = require('express');
const { send_token } = require('../controllers/auth.controllers');
const { verify_token } = require('../utils/jwt');

const AuthRouter = express.Router();


AuthRouter.post("/auth",send_token)
AuthRouter.get("/check_auth",verify_token, (req,res)=>{
    return res.status(200).json({status:true, message:"valid user"})
})




module.exports = AuthRouter