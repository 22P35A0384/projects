import Puteditimg from "../controllers/puteditimg";
import express from 'express'
import multer from 'multer'

const Router = express.Router()

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

Router.put('/editdataimg/:id',upload.single('myimg'),Puteditimg)

export default Router;