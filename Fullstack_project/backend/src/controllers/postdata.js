import Newdataschema from '../models/newdata.js'
import nodemailer from 'nodemailer';

const Postdata = async(req,res,next)=>{
    console.log(req.body)
    const profile = (req.file) ? req.file.filename : null
    const {username, password, mail} = req.body;
    const formdata = new Newdataschema({
        username,
        password,
        mail,
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
            to: mail,
            subject: 'Conformation Mail',
            text: 'Hello Mr. '+username+' Thanks For Registering, Please Conform Your Registration',
            attachments:[{
                filename:profile,
                path:'public/pdfs/'+profile
            }]
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          return res.send({msg:profile})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({formdata})
}

export default Postdata;