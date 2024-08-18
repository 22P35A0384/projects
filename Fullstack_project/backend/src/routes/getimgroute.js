import Imgcontroller from '../controllers/getimg.js'
import express from 'express'
const Router = express.Router()

Router.get("/img/:id",Imgcontroller)

export default Router;