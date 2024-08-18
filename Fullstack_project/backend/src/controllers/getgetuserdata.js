import Newdataschema from '../models/newdata.js';

const Getgetuserdata = async(req,res,next)=>{
    const _id = req.params.id
    let userdata;
    try{
        userdata = await Newdataschema.findById(_id);
    }catch(err){
        console.log(err)
    }
    if (!userdata){
        return res.status(404).json({msg:'No Students Found.'})
    }
    const path = '..../backend/public/images/'+userdata.profile
    return res.status(200).json({userdata,path})
}

export default Getgetuserdata;