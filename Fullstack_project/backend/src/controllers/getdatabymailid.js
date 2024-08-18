import Plantsschema from '../models/plants_and_trees.js';

const Getdatabymailid = async(req,res,next)=>{
    const _id = req.params.id
    console.log(_id)
    let logindata;
    try{
        logindata = await Plantsschema.findById(_id);
        console.log(logindata)
    }catch(err){
        console.log(err)
    }
    if(!logindata){
        return res.status(404).json({msg:'No User Found.'})
    }
    return res.status(200).json({logindata})
}

export default Getdatabymailid;