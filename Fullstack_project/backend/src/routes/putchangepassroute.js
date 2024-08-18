import Putchangepass from "../controllers/putchangepass";
import express from 'express'
const Router = express.Router()

Router.put('/changepass/:id/:old/:new',Putchangepass)

export default Router;