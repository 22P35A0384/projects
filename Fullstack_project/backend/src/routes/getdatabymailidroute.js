import Getdatabymailid from "../controllers/getdatabymailid.js";
import express from 'express';
const Router = express.Router();

Router.get('/getdatabyemail/:id',Getdatabymailid);

export default Router;