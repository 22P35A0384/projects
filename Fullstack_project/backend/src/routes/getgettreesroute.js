import Getgettree from "../controllers/getgettrees";
import express from 'express';
const Router = express.Router();

Router.get('/gettree',Getgettree);

export default Router;