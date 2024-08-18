import Newdataschema from '../models/newdata.js';

const Puteditform = async(req,res,next)=>{
    const _id = req.params.id
    const {username, password, mail} = req.body.formdata;
    let updatedata;
    try{
        updatedata = await Newdataschema.findByIdAndUpdate(_id,{username, password, mail})
        return res.send({msg:'updated'})
    }catch(err){
        console.log(err)
    }
    if(!updatedata){
        return res.status(404).json({msg:'Users Not Found'})
    }
    return res.status(200).json({updatedata})
}

export default Puteditform;