import Plantsschema from '../models/plants_and_trees';

const Getgetdata = async(req,res,next)=>{
    let userdata;
    try{
        userdata = await Plantsschema.find();
    }catch(err){
        console.log(err)
    }
    if (!userdata){
        return res.status(404).json({msg:'No Students Found.'})
    }
    return res.status(200).json({userdata})
}

export default Getgetdata;