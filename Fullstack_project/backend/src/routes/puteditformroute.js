import Puteditform from "../controllers/puteditform";
import express from 'express';
const Router = express.Router();

Router.put('/editform/:id',Puteditform);

export default Router;