import Postfeedback from "../controllers/postfeedback";
import express from "express";
const Router = express.Router()

Router.post('/sendfeedback',Postfeedback)

export default Router;