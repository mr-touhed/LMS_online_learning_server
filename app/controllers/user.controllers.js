const user_collection = require("../models/user.models");

const insert_user = async (req,res) =>{
    const {name,email,img} = req.body;
    const user_data = {name,email,img}
    
    try {
       const exsist_user = await  user_collection.findOne({email:email});
       if(exsist_user) return res.status(200).json({status:true,message:"user alrady exist"})
        const result = await  user_collection.insertOne(user_data);
       if(result.insertedId){
        return res.status(201).json({status:true,message:"register new user"})
       }else{
        return res.status(403).json({status:false,message:"register failed"})
       }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false,message:"server Error"})
    }
}













module.exports = {insert_user}