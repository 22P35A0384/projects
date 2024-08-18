import Getgetplant from '../controllers/getgetplant.js';
import express from 'express'
const Router = express.Router()

Router.get('/getplant',Getgetplant);

export default Router;

