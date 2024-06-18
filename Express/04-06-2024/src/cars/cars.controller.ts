import { Request, Response } from 'express';
import { Car, add, getAllCars, getCarsByColor } from './cars.model';
import { ObjectId } from 'mongodb';

export async function getCars(req: Request, res: Response) {
    try {
        let cars: any = await getAllCars();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function carsByColor(req: Request, res: Response) {
    try {
        let { clr } = req.params;
        let cars: any = await getCarsByColor(clr);
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function addCar(req: Request, res: Response) {
    try {
        //שליפת המידע מגוף הבקשה
        let { color } = req.body;
        //יצירת מכונית חדשה
        let car: Car = { color: color };
        //שליחת האובייקט למודל לשם שמירה
        let result = await add(car);
        //לאובייקט id להוסיף את ה 
        car._id = new ObjectId(result.insertedId);
        //החזרת תשובה ממסד הנתונים
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ error });
    }
}