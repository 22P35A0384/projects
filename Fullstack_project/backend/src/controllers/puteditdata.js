import Plantsschema from '../models/plants_and_trees.js';

const Puteditdata = async(req,res,next)=>{
    const {fname,lname,email} = req.body
    const _id = req.params.id
    let editdata;
    try{
        editdata = await Plantsschema.findByIdAndUpdate(_id,{fname,lname,email})
        return res.status(200).json({msg:'Updated Successfully!'})
    }catch(err){
        console.log(err)
    }
}

export default Puteditdata;