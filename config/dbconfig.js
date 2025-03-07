const mongoose = require("mongoose")

const dbConfig = async() => {
    try {
       await mongoose.connect('mongodb+srv://jishnum:Lu26OXqtkM5Vhs0b@cluster0.1acfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
       console.log("db connected");
       



    } catch (error) {
        console.log(error);
        

    }
}

module.exports = {dbConfig}