import Getsingleplant from "../controllers/getsingleplant";
import express from 'express';
const Router = express.Router();

Router.get('/singleplant/:id',Getsingleplant);

export default Router;