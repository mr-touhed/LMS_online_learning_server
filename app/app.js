require('dotenv').config()
const {runDB} = require('./db/db');
const express = require('express');
const app = express();
runDB()
const cors = require('cors');
const AuthRouter = require('./routers/auth.routers');
const userRouter = require('./routers/user.routers');
const courseRouter = require('./routers/course.routers');
const enrollRouter = require('./routers/enroll.routers');



app.use(express.json())
app.use(cors())


app.use("/api",AuthRouter)
app.use("/api",userRouter)
app.use("/api",courseRouter)
app.use("/api",enrollRouter)


module.exports = app