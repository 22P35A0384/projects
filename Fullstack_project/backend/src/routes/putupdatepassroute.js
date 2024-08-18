import Putupdatepass from "../controllers/putupdatepass";
import express from 'express';
const Router = express.Router();

Router.put('/updatepass/:id',Putupdatepass);

export default Router;