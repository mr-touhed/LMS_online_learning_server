const { client } = require("../db/db");

const course_collection = client.db("lmsDB").collection("courses");


module.exports = course_collection