const mongoose = require("mongoose")

const MONGO_URI = "mongodb://0.0.0.0:27017/blogs"

// const MONGO_URI = "mongodb+srv://rishi1089:Pass2019@cluster0.qt1ahst.mongodb.net/Blogs"

const connectDb  = async ()=>{
    const connection = await mongoose.connect(MONGO_URI);
    if(connection){ 
    console.log("Database Connected");
    }
    else console.log("Database connection failed");
}
module.exports =  {connectDb}



