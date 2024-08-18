import Newtreeschema from '../models/newtree.js';

const Getgettree = async(req,res,next)=>{
    let gettree;
    try{
        gettree = await Newtreeschema.find();
    }catch(err){
        console.log(err)
    }
    if (!gettree){
        return res.status(404).json({msg:'No Trees Found.'})
    }
    return res.status(200).json(gettree)
}

export default Getgettree;