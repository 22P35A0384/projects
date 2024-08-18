import Feedbackschema from '../models/feedback.js'
import nodemailer from 'nodemailer'

const Postfeedback = (req,res,next)=>{
    const {name,email,subject,message} = req.body
    const Feedback = new Feedbackschema({
        name,
        email,
        subject,
        message
    })
    try{
        Feedback.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'technicalhubdriverready@gmail.com',
              pass: 'aqlp joww mqgk fmbw'
            }
        });
          
        var mailOptions = {
            from: 'technicalhubdriverready@gmail.com',
            to: 'sai8341j11@gmail.com',
            subject: 'New Feedback Data',
            text: 'New Feedback Data From'+name+' With Email Id'+email+' The Subject Is '+subject+'And The Messaage Was '+message,
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return res.send({msg:'Thank You For Your Valuable Feedback'})
    }catch(err){
        console.log(err)
    }
}

export default Postfeedback;