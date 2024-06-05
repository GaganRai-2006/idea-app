 idea_controler=require("../controlers/idea_controlers")

module.exports=(app)=>{
                    app.get("/mern/api/v1/ideas",idea_controler.Allideas)
}
module.exports=(app)=>{
                    //127.0.0.1:8000/mern/api/v1/ideas/1
                    app.get("/mern/api/v1/ideas/:id",idea_controler.getIdeaBYId)
}