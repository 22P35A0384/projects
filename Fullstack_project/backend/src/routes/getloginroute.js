import Getlogin from "../controllers/getlogin";
import express from 'express';
const Router = express.Router()

Router.get('/checkmail/:user/:pass',Getlogin)

export default Router;