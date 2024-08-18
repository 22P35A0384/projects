import Postsubscriber from "../controllers/postsubscriber";
import express from 'express'
const Router = express.Router()

Router.post('/subscribe',Postsubscriber)

export default Router;