import Getbusdata from "../controllers/getbusdata";
import express from 'express';
const Router = express.Router()

Router.get('/busdata',Getbusdata);

export default Router;