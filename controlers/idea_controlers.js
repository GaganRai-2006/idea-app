const idea=require("../models/ideas_models")
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