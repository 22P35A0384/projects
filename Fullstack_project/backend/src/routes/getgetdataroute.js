import Getgetdata from "../controllers/getgetdata";
import express from 'express';
const Router = express.Router();

Router.get('/getdata',Getgetdata);

export default Router;