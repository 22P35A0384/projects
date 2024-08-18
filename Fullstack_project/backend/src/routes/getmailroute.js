import Getmail from "../controllers/getmail";
import express from 'express';
const Router = express.Router();

Router.get('/mail/:id',Getmail);

export default Router;