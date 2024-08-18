import Getgetotp from "../controllers/getgetotp";
import express from 'express';
const Router = express.Router();

Router.get('/getotp/:id',Getgetotp);

export default Router;