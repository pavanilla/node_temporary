const app=require("express")()
const dummy=require('./routes/User')
const bodyParser=require('body-parser')


app.use("/",dummy)


const PORT=5000
app.listen(PORT,()=>{
    console.log(`listening on the ${PORT}`) 
})