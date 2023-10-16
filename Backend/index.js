
const express =  require("express")
const cors = require("cors")
const {connectDb} = require("./connection")
const BlogPost = require("./models/BlogPost")
const app = express()
const port = 5000;

//connect database 
connectDb()

//middleware
app.use(express.json())
app.use(cors())

//routes
//ROUTE 1: POST the blog
app.post("/post-blog", async(req,res)=>{
    let blog = new BlogPost({
        title: req.body.title,
        description: req.body.description,
    })

    await blog.save();
    res.json({message:"Blog post saved successfully", blog })
})

//ROUTE 2: GET all the blogs
app.get("/get-blogs", async(req,res)=>{
    let blogs = await BlogPost.find();
    if(!blogs){
        res.status(404).json({ message : "No Blogs found"})
    }
    res.json({ blogs })
})

//ROUTE 3: DELETE the blogs
app.delete("/delete-blog/:id", async(req,res)=>{
    let blogs = await BlogPost.findByIdAndDelete(req.params.id);
    if(!blogs){
        res.status(404).json({ message : "No Blogs found"})
    }
    res.status(200).json({message : "Blog deleted successfully"})
})

//ROUTE 4: UPDATE the blogs
app.put("/update-blog/:id", async(req,res)=>{
    let blog = await BlogPost.findByIdAndUpdate(req.params.id);
    if(!blog){
        res.status(404).json({ message : "No Blogs found"})
    }
    
    //this is else part of above if statement 
    if(!req.body.title && !req.body.description){
        res.json({message:"Please enter title or description"})
    }else if (!req.body.title){
        blog.description = req.body.description
    }else if (!req.body.description){
        blog.title = req.body.title
    }else{
        blog.title = req.body.title
        blog.description = req.body.description
    }
    await blog.save()
    res.status(200).json({message:"Blog Updated successfully",blog})
})



//listen server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
