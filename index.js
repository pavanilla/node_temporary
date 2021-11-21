const app=require("express")()
const dummy=require('./routes/User')



app.use("/",dummy)


const PORT=5000
app.listen(PORT,()=>{
    console.log(`listening on the ${PORT}`) 
})