const app = require("./app/app");

const PORT = process.env.POST || 5000




app.get("/", (erq,res) => {
    res.status(200).json({status:true, message:"server is running...."})
})

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`))