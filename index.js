const express=require('express')
const app=express()

app.use(express.json())
require("./routes/ideas_routes")(app)



app.listen(8000,()=>{
                    console.log("the app is strated",8000)
})

