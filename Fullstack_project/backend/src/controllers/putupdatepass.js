import Plantsschema from '../models/plants_and_trees.js';

const Putupdatepass = async(req,res,next)=>{
    const _id = req.params.id
    const {password} = req.body.update;
    console.log(password)
    let updatepass;
    try{
        updatepass = await Plantsschema.findByIdAndUpdate(_id,{password})
        return res.send({msg:'Your Password Was Updated Successfully, You Will Be Redirected To Login Page'})
    }catch(err){
        console.log(err)
    }
    if(!updatepass){
        return res.status(404).json({msg:'Users Not Found'})
    }
    return res.status(200).json({updatepass})
}

export default Putupdatepass;