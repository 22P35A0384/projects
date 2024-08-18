import Newplantschema from '../models/newplant.js';

const Getsingleplant = async(req,res,next)=>{
    const _id = req.params.id
    let single;
    try{
        single = await Newplantschema.findById(_id);
        console.log(single)
    }catch(err){
        console.log(err)
    }
    if(!single){
        return res.status(404).json({msg:'No Plants Found.'})
    }
    return res.status(200).json({single})
}

export default Getsingleplant;