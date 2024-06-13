const { ObjectId } = require("mongodb");
const course_collection = require("../models/course.models");
const user_collection = require("../models/user.models");


const insert_course = async (req,res) =>{
    const course = req.body;
    const decode_email = req.headers.email;
    const author_email = course.author_email;
   
    
    try {
      
            if(decode_email !== author_email){
                return res.status(402).json({status:false, message:"unauthorization user "})
            }else{

                const result  = await course_collection.insertOne(course);
                    if(result.insertedId){
                        return res.status(201).json({status:true, message:"added new course successfully"})
                    }else{
                    return res.status(402).json({status:false, message:"failed to add course"})
                    }
            }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false, message:"server error"})
    }
}

const user_course_list = async (req,res) =>{
   
        const user_email = req.headers.email;

    try {
        const course_list = await course_collection.find({author_email:user_email}).toArray();
       return  res.status(200).json({status:true,course_list})
    } catch (error) {
        return  res.status(500).json({status:true,message:"server error"})
    }
}

const get_single_course = async(req,res) =>{
    const id = req.params.id;
    try {
            const course = await course_collection.findOne({_id:new ObjectId(id)})
          if(course){
            const author_email = course.author_email;
            const author =await user_collection.findOne({email:author_email});

            const course_details = {
                _id:course._id,
                title:course.title,
                price:course.price,
                thumb:course.thumb,
                details:course.details,
                catagory:course.catagory,
                author:{
                    name:author.name,
                    email:author.email,
                    img:author.img,
                }
            }

           return  res.status(200).json({status:true,course:course_details})
          }
    } catch (error) {
        
    }
}


const update_course = async (req,res) =>{
    try {
        const id = req.params.id;
        
        const update_data = req.body;
        const result = await course_collection.updateOne({_id:new ObjectId(id)},{$set:update_data});
        if(result.modifiedCount > 0){
            return res.status(202).json({status:true,message:"you course updated now!"})
        }else{
            return res.status(200).json({status:false,message:"your course not update right now!"})
        }
    } catch (error) {
        
    }
}

const get_all_courses = async (req,res) =>{
    try {
        const data = await course_collection.find().toArray();
        if(data){
            return res.status(200).json({status:true, data})
        }
    } catch (error) {
        return res.status(500).send({status:false,message:"server error"})
    }
}

module.exports = {
    insert_course,
    user_course_list,
    update_course,
    get_single_course,
    get_all_courses
}