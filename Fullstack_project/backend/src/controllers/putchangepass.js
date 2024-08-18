import Plantsschema from '../models/plants_and_trees.js';

const Putchangepass = async(req,res,next)=>{
    const _id = req.params.id
    const oldpass = req.params.old
    const password = req.params.new
    let checkpass;
    let updatepass;
    try{
        checkpass = await Plantsschema.findOne({_id:_id,password:oldpass})
    }catch(err){
        console.log(err)
    }
    if(!checkpass){
        return res.status(200).json({msg:'Invalid Old Password!'})
    }else{
        try{
            updatepass = await Plantsschema.findByIdAndUpdate(_id,{password})
            return res.status(200).json({msg:'Password Changed Successfully'})
        }catch(err){
            console.log(err)
        }
    }
}

export default Putchangepass;