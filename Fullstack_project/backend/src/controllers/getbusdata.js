import Busdataschema from '../models/busdata.js';

const Getbusdata = async(req,res,next)=>{
    let dataofbus;
    try{
        dataofbus = await Busdataschema.findOne({_id:'5e677c26a807e55b9b5a3912'});
    }catch(err){
        console.log(err)
    }
    if(!dataofbus){
        return res.status(404).json({msg:'No Data Found'})
    }
    return res.status(200).json({dataofbus})
}

export default Getbusdata;
