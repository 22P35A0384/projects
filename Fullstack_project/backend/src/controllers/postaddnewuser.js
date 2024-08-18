import Plantsschema from '../models/plants_and_trees.js';
import nodemailer from 'nodemailer';

const Postaddnewuser = async(req,res,next)=>{
    // console.log(req.body)
    const profile = (req.file) ? req.file.filename : null
    const {fname,lname, password, email} = req.body;
    const formdata = new Plantsschema({
        fname,
        lname,
        password,
        email,
        profile 
    })
    try{
        formdata.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'technicalhubdriverready@gmail.com',
              pass: 'aqlp joww mqgk fmbw'
            }
        });
          
        var mailOptions = {
            from: 'technicalhubdriverready@gmail.com',
            to: email,
            subject: 'Welcome To Plants & Trees',
            text: 'Hello '+fname+' '+lname+' Thanks For Registering, Please Conform Your Registration',
            attachments:[{
                filename:profile,
                path:'public/profile/'+profile
            }]
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return res.send({msg:'Your Account Was Created, You Will Be Redirected To Login Page'})
        
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({form})
}

export default Postaddnewuser;