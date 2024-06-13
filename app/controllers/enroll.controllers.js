const { ObjectId } = require("mongodb");
const course_collection = require("../models/course.models");
const get_payment = require("../utils/stripPayment");
const enroll_collection = require("../models/enroll.models");



const payment_client_secret = async (req,res) =>{
    const {courseId} = req.body;
       
    try {
        const getCourse = await course_collection.findOne({_id:new ObjectId(courseId)})
            if(getCourse){
                const {price,author_email,_id} = getCourse;
                    const client_secret = await get_payment({price,author_email,_id})

                       return  res.send({
            clientSecret: client_secret,
          });
            }
    
        
    
    } catch (error) {
        
    }
}

const insert_Enroll_course = async (req,res) =>{
    const {payment_courseId} = req.body;
    const student_email = req.headers?.email;
        
    try {
        const enroll_course = await course_collection.findOne({_id:new ObjectId(payment_courseId)});
        if(enroll_course){
            
            const enroll_doc = {enroll_user:student_email,price:enroll_course.price,title:enroll_course.title,thumb:enroll_course.thumb, payment:"success", createAt:new Date()  };
            const result = await enroll_collection.insertOne(enroll_doc);
            if(result.insertedId){
                return res.status(202).json({status:true,message:"payment has been successfully"})
            }
        }
    } catch (error) {
        console.log(error);
    }
}
const get_user_enroll_data = async (req,res) =>{
    const email = req.headers.email;
        try {
            const result = await enroll_collection.find({enroll_user:email}).toArray();
            if(result){
                return res.status(200).json({status:true,data:result})
            }else{
                return res.status(200).json({status:false,data:"no Enroll right now"})
            }
        } catch (error) {
            
        }
}
module.exports = {payment_client_secret,insert_Enroll_course,get_user_enroll_data}