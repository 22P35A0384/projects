import Postadduser from "../controllers/postadduser.js";
import express from 'express';
const Router = express.Router();

Router.post('/adduser',Postadduser);

export default Router;