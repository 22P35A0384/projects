import Getgetuserdata from "../controllers/getgetuserdata";
import express from 'express';
const Router = express.Router();

Router.get('/getuserdata/:id',Getgetuserdata);

export default Router;
