 idea_controler=require("../controlers/idea_controlers")

module.exports=(app)=>{
                    // get 127.0.0.1:8000/mern/api/v1/ideas
                    app.get("/mern/api/v1/ideas",idea_controler.Allideas)
}
module.exports=(app)=>{
                    // get 127.0.0.1:8000/mern/api/v1/ideas/1
                    app.get("/mern/api/v1/ideas/:id",idea_controler.getIdeaBYId)
                    // post 127.0.0.1:8000/mern/api/v1/ideas
                    app.post("/mern/api/v1/ideas",idea_controler.getIdeaBybody)
                    // put 127.0.0.1:8000/mern/api/v1/ideas/3
                    app.put("/mern/api/v1/ideas/:id",idea_controler.getupdatedIdea)

                    //delete 127.0.0.1:8000/mern/api/v1/ideas/3
                    app.delete("/mern/api/v1/ideas/:id",idea_controler.deleteIdea)
}