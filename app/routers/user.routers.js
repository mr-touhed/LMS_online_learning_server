const express = require('express');
const { insert_user } = require('../controllers/user.controllers');

const userRouter = express.Router();



userRouter.post("/user",insert_user)



module.exports = userRouter