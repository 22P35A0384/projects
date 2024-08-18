import Plantsschema from '../models/plants_and_trees';

const Getlogin = async(req,res,next)=>{
    const mail = req.params.user;
    const pass = req.params.pass;
    let checkmail;
    let checkpass;
    try{
        checkmail = await Plantsschema.findOne({email:mail})
        checkpass = await Plantsschema.findOne({email:mail,password:pass})
    }catch(err){
        console.log(err)
    }
    if(!checkmail){
        return res.status(200).json({msg:'Invalid User!'})
    }else if(!checkpass){
        return res.status(200).json({msg:'Invalid Password!'})
    }
    return res.status(200).json(checkpass._id)
}

export default Getlogin;