import { Router } from "express";
import { getCars, carsByColor, addCar } from "./cars.controller";

const carsRouter = Router();

carsRouter
    .get('/', getCars)
    .get('/color/:clr', carsByColor)
    .post('/', addCar)

export default carsRouter;

