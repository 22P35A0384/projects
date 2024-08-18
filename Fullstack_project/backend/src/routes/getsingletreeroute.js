import Getnewtree from "../controllers/getsingletree";
import express from 'express';
const Router = express.Router();

Router.get('/singletree/:id',Getnewtree);

export default Router;