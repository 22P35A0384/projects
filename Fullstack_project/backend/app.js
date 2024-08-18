import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import newdata from './src/models/newdata.js';
import multer from 'multer';
import plants from './src/models/plants_and_trees.js';
// import newplant from './src/models/newplant.js';
// import newtree from './src/models/newtree.js';
import Imgapp from './src/routes/getimgroute.js';
import Subscriberapp from './src/routes/postsubsriberroute.js';
import Feedbackapp from './src/routes/postfeedbackroute.js';
import Changepassapp from './src/routes/putchangepassroute.js';
import Editdataapp from './src/routes/puteditdataroute.js';
import Editimgapp from './src/routes/getimgroute.js';
import Puteditimg from './src/routes/puteditimgroute.js';
import Getloginapp from './src/routes/getloginroute.js';
import Getbusdataapp from './src/routes/getbusdataroute.js';
import Postadduserapp from './src/routes/postadduserroute.js';
import Getdatabymailidapp from './src/routes/getdatabymailidroute.js';
import Getgetdataapp from './src/routes/getgetdataroute.js';
import Postaddnewuserapp from './src/routes/postaddnewuserroute.js';
import Getgetotpapp from './src/routes/getgetotproute.js';
import Getmailapp from './src/routes/getmailroute.js';
import Putupdatepassapp from './src/routes/putupdatepassroute.js';
import Postaddtreeapp from './src/routes/postaddtreeroute.js';
import Postaddplantapp from './src/routes/postaddplantroute.js';
import Postdataapp from './src/routes/postdataroute.js';
import Getsingleplantapp from './src/routes/getsingleplantroute.js';
import Getsingletreeapp from './src/routes/getsingletreeroute.js';
import Getgetplantapp from './src/routes/getgetplantrouter.js';
import Getgettreeapp from './src/routes/getgettreesroute.js';
import Puteditformapp from './src/routes/puteditformroute.js';
import Getgetuserdataapp from './src/routes/getgetuserdataroute.js';
import Deleteuserapp from './src/routes/deleteuserroute.js';

const app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://venkatasaigangadharsgk:n4VQAS94wkyL4Nls@cluster0.cykwkdu.mongodb.net/Gangadhar?retryWrites=true&w=majority')
    .then(()=>app.listen(7416))
    .then(()=>
        console.log('success')
    )
    .catch((err)=>console.log(err));

// Structured Code Starts
app.use('/',Imgapp);
app.use('/',Subscriberapp);
app.use('/',Feedbackapp);
app.use('/',Changepassapp);
app.use('/',Editdataapp);
app.use('/',Editimgapp);
app.use('/',Puteditimg);
app.use('/',Getloginapp);
app.use('/',Getbusdataapp);
app.use('/',Postadduserapp);
app.use('/',Getdatabymailidapp);
app.use('/',Getgetdataapp);
app.use('/',Postaddnewuserapp);
app.use('/',Getgetotpapp);
app.use('/',Getmailapp);
app.use('/',Putupdatepassapp);
app.use('/',Postaddtreeapp);
app.use('/',Postaddplantapp);
app.use('/',Postdataapp);
app.use('/',Getsingleplantapp);
app.use('/',Getsingletreeapp);
app.use('/',Getgetplantapp);
app.use('/',Getgettreeapp);
app.use('/',Puteditformapp);
app.use('/',Getgetuserdataapp);
app.use('/',Deleteuserapp)
// Structured Code Ends

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public/profile')
    },
    filename: function (req, file, callback) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, Date.now()+"_"+file.originalname)
    }
    })
    
    const upload = multer({ storage: storage })

// app.post('/adddata',(req,res,next)=>{
//     console.log(req.body)
// })
// app.use('/api',(req,res,next)=>{
//     res.send('sending response (with path "api")')
// })
// app.use('/testing',(req,res,next)=>{
//     res.send('sending response (with path "testing")')
// }

app.delete('/deleteacc/:id',async(req,res,next)=>{
    const _id = req.params.id
    let deleteacc;
    try{
        deleteacc = await plants.findByIdAndDelete(_id)
        return res.status(200).json({msg:'Account Deleted Successfully'})
    }catch(err){
        console.log(err)
    }
})