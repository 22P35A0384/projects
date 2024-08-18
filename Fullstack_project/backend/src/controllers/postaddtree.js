import Treeschema from '../models/newtree.js';

const Postaddtree = async(req,res,next)=>{
    const profile = (req.file) ? req.file.filename : null
    console.log(req.body)
    const {name,details} = req.body;
    const addtree = new Treeschema({
        name,
        details,
        profile
    })
    try{
        addtree.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({addtree})
}

export default Postaddtree;