import Newdataschema from '../models/newdata.js';

const Deleteuser = async(req,res,next)=>{
    const _id = req.params.id
    let studentdata
    try{
        studentdata = await Newdataschema.findByIdAndDelete(_id)
        return res.status(200).json({msg:'sucusses'})
    }
    catch(err){
        console.log(err)
    }
}

export default Deleteuser;