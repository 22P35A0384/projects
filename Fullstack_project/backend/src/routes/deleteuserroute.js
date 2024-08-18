import Deleteuser from "../controllers/deleteuser";
import express from 'express';
const Router = express.Router();

Router.delete('/deleteuser/:id',Deleteuser);

export default Router;