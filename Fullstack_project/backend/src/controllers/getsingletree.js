import Newtreeschema from '../models/newtree.js';

const Getnewtree = async(req,res,next)=>{
    const _id = req.params.id
    let single;
    try{
        single = await Newtreeschema.findById(_id);
        console.log(single)
    }catch(err){
        console.log(err)
    }
    if(!single){
        return res.status(404).json({msg:'No Trees Found.'})
    }
    return res.status(200).json({single})
}

export default Getnewtree;