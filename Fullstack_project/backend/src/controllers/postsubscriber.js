import SubscriberSchema from '../models/subscribe.js'
import nodemailer from 'nodemailer'

const Postsubscriber = (req,res,next)=>{
    const email = req.body.subscribemail
    const updata = new SubscriberSchema({email})
    try{
        updata.save()
        // console.log(updata)
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
            subject: 'Subscribed',
            text:'Thank You For Subscribing, We Will Get You All The Updates Upto Date...',
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return res.send({msg:'Thank You For Subscribing Us'})
    }catch(err){
        console.log(err)
    }
}

export default Postsubscriber;