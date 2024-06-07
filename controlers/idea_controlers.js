const idea=require("../models/ideas_models")
 let id=3 // initialize the count of id
exports.Allideas=(req,res)=>{
                    res.status(200).send(idea)
}
//contlores fetch the idea by id
exports.getIdeaBYId=(req,res)=>{
//first we need to read the ideas by req.params.id which gives ideas idgit
                    console.log(req.params.id)
                    const ideas_id=req.params.id
                    const ideas_details=idea[ideas_id]
                    if(ideas_details){
                                        res.status(200).send(ideas_details)
                    }else{
                                        res.status(500).send({
                                                            error:"The idea not found"
                                        })
                    }
}

// idea posting logic
//controler to create idea
exports.getIdeaBybody=(req,res)=>{
                    // read the req body
                    idea_obj=req.body
                    id++
                    
                    //set the id in the new created id object
                    idea_obj["id"]=id


                    //add the new object in the idea object
                    idea[id]=idea_obj

                    // retrun the response
                    res.status(201).send(idea_obj)

}

//we want to update the idea
exports.getupdatedIdea=(req,res)=>{
                    //read the idea id
                    idea_id=req.params.id

                    //check if the idea id is present or not 
                    if(idea[idea_id]){
                                        idea_obj=req.body
                                        idea[idea_id]=idea_obj
                                        res.status(200).send(  idea[idea_id])

                    }else{
                                        res.status(404).send({
                                                            error:"The idea Id is not found"
                                        })
                    }


                    // read the new idea body and replace it


                    // return the new updated idea body

}

// delete method
exports.deleteIdea=(req,res)=>{
                    // fetch the idea
                    idea_id=req.params.id
                    if(idea[idea_id]){
                                        delete idea[idea_id]
                                        res.status(200).send({
                                                            message:"your idea is deleted successfully"
                                        })
                    }else{
                                        res.status(404).send({
                                                            message:"given idea's id is not present"
                                        })
                    }
}

