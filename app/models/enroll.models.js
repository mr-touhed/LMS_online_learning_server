const { client } = require("../db/db");

const enroll_collection = client.db("lmsDB").collection("enrolls");


module.exports = enroll_collection