const { client } = require("../db/db");

const user_collection = client.db("lmsDB").collection("users");


module.exports = user_collection