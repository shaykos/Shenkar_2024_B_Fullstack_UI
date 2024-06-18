import { Request, Response } from 'express';
import { getAllCars, getCarsByColor } from './cars.model';

export async function getCars(req: Request, res: Response) {
    let cars: any = await getAllCars();
    res.status(200).json(cars);

}

export async function carsByColor(req: Request, res: Response) {
    let { clr } = req.params;
    let cars: any = await getCarsByColor(clr);

    res.status(200).json(cars);
}

export async function addCar(req: Request, res: Response) {
    let { color } = req.body;
    
}