const { createUser, getUser, listUser, updateUser, deleteUser } = require("../controllers/usercontroler")

const Userrouter = require("express").Router()

Userrouter.post("/users",createUser)
Userrouter.get("/users",getUser)
Userrouter.get("/users/:id",listUser)
Userrouter.put("/users/:id",updateUser)
Userrouter.delete("/users/:id",deleteUser)

module.exports ={ Userrouter}