import Plantsschema from '../models/plants_and_trees.js';

const Getmail = async(req,res,next)=>{
    const mail = req.params.id
    const data = {email:mail}
    let maildata;
    try{
        maildata = await Plantsschema.findOne(data)
        // console.log(maildata)
    }catch(err){
        console.log(err)
    }
    if(!maildata){
        return res.status(404).json({msg:'Email Id Not Found'})
    }
    return res.status(200).json(maildata._id)
}

export default Getmail;