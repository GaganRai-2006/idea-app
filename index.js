const express=require('express')
const app=express()


require("./routes/ideas_routes")(app)


app.listen(8000,()=>{
                    console.log("the app is strated",8000)
})

