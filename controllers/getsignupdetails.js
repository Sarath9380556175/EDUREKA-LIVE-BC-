const signups=require('../modals/signup')



exports.usersignupforms=(req,res)=>{
    signups.find()

    .then(response=>res.status(200).json({message:'User successfully got signup details', signups:response}))

 .catch(err=>res.status(500).json({error:err}))

}