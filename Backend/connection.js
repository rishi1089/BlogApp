const mongoose = require("mongoose")

const MONGO_URI = "mongodb://0.0.0.0:27017/blogs"
// ALWAYS USE THIS URL FOR MONGODB(COMPASS) CONNECTION

// const MONGO_URI = "mongodb://rishi1089:Pass%25402019@ac-vidummh-shard-00-00.qt1ahst.mongodb.net:27017,ac-vidummh-shard-00-01.qt1ahst.mongodb.net:27017,ac-vidummh-shard-00-02.qt1ahst.mongodb.net:27017/?ssl=true&replicaSet=atlas-keykm1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp"

// here the password is "Pass@2019" but @ is encoded as %2540 

const connectDb  = async ()=>{
    const connection = await mongoose.connect(MONGO_URI);
    if(connection){ 
    console.log("Database Conneccted");
    }
    else console.log("Database connection failed");
}
module.exports =  {connectDb}



