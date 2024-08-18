import Newplantschema from '../models/newplant.js';

const Getgetplant = async(req,res,next)=>{
    let getplant;
    try{
        getplant = await Newplantschema.find();
    }catch(err){
        console.log(err)
    }
    if (!getplant){
        return res.status(404).json({msg:'No Plants Found.'})
    }
    return res.status(200).json(getplant)
}

export default Getgetplant;