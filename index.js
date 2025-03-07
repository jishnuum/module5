const express = require("express")
const { dbConfig } = require("./config/dbconfig")
const { Userrouter } = require("./routes/Userroutes")
const app = express()


app.use(express.json())
dbConfig()

app.use("/user",Userrouter)







app.listen(4000,()=>{
    console.log("server start on port 4000");
    
})