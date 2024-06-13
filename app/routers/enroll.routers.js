const express = require('express');
const { payment_client_secret, insert_Enroll_course, get_user_enroll_data } = require('../controllers/enroll.controllers');
const { verify_token } = require('../utils/jwt');

const enrollRouter = express.Router();



enrollRouter.post("/create-payment-intent", payment_client_secret);
enrollRouter.post("/inset-enroll",verify_token, insert_Enroll_course );
enrollRouter.get("/enroll",verify_token, get_user_enroll_data );



module.exports = enrollRouter