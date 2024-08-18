import Plantsschema from '../models/plants_and_trees.js'

const Puteditimg =async(req,res,next)=>{
    //console.log(req.file)
    const {fname,lname,email} = req.body
    const profile = (req.file) ? req.file.filename : null
    const _id = req.params.id
    let editdata;
    try{
        editdata = await Plantsschema.findByIdAndUpdate(_id,{fname,lname,email,profile})
        return res.status(200).json({msg:'Updated Successfully!'})
    }catch(err){
        console.log(err)
    }
}

export default Puteditimg;