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