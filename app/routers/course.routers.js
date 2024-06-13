const express = require('express');
const { insert_course, user_course_list, get_single_course, update_course, get_all_courses } = require('../controllers/course.controllers');
const { verify_token } = require('../utils/jwt');

const courseRouter = express.Router();

courseRouter.post("/course",verify_token,insert_course);
courseRouter.get("/course/:id",get_single_course);
courseRouter.get("/courses",get_all_courses);
courseRouter.get("/author-course",verify_token,user_course_list);
courseRouter.patch("/author-course/:id",verify_token,update_course);



module.exports = courseRouter