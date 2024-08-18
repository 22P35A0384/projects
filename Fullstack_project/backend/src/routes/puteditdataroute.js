import Puteditdata from "../controllers/puteditdata";
import express from 'express';
const Router = express.Router()

Router.put('/editdata/:id',Puteditdata)

export default Router;