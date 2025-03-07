const { userModel } = require("../model/Usermodel")



const createUser = async(req,res)=>{
    try {
        const {name,email,age} = req.body
        if(!name || !email || !age){
            return res.status(error.status || 400).json("All fields are required")
        }
    
        const newUser = new userModel({name,email,age})
        const saved = await newUser.save()
        res.status(201).json({message:"user successfully created",saved})
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "internal server error"})
    }

}

const getUser = async (req,res)=>{
    try {
        const ListUser =await userModel.find()
        res.status(200).json({message:"users listed",ListUser})
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "internal server error"})        
        
    }
}

const listUser =async (req,res)=>{
    try {
        const {id} = req.params
        console.log(id);
        
        const listUsers =await userModel.findById(id)
        if(!listUser){
            return res.status(400).json("no user found")
        }
        res.status(200).json({message:"user listed",listUsers})
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "internal server error"})
        
    }
}

const updateUser = async(req,res)=>{
    try {
        const {id} = req.params
        const updateUsers =await userModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"updated user succesfully",updateUsers})
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "internal server error"})

        
    }
}

const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params
        await userModel.findByIdAndDelete(id)
        res.status(204).json({message:"user deleted succesfully"})
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "internal server error"})

        
    }
}

module.exports = {
    createUser,
    getUser,
    listUser,
    updateUser,
    deleteUser
}
