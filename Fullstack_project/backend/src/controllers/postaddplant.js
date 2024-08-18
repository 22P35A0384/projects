import Plantschema from '../models/newplant.js';

const postaddplant = async(req,res,next)=>{
    const profile = (req.file) ? req.file.filename : null
    console.log(req.body)
    const {name,details} = req.body;
    const addplant = new Plantschema({
        name,
        details,
        profile
    })
    try{
        addplant.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({addplant})
}

export default postaddplant;