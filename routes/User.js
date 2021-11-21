const express=require("express") 
 

const route=express.Router()


route.get("/users",(req,res)=>{
  res.send("Hi ,Welcome ")
})

route.get("/users/:id",(req,res)=>{
    const body=req.params.id
    res.send(`hello user ${body}`)
})


route.get("/",(req,res)=>{
    res.send("Hai world")
})

// route.post("/",()=>{})


module.exports=route