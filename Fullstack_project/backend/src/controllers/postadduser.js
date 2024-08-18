import Formschema from '../models/form.js';

const Postadduser = (req,res,next)=>{
    console.log(req.body.formdata)
    const {username, password, mail, course} = req.body.formdata;
    const formdata = new Formschema({
        username,
        password,
        mail,
        course
    })
    try{
        formdata.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({formdata})
}

export default Postadduser;