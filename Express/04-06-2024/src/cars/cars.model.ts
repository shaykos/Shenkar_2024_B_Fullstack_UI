import { ObjectId, WithId } from "mongodb";
import { CarsDB } from "./cars.db";

export type Car = {
    _id?: ObjectId,
    color: string
}

export async function getAllCars(): Promise<any> {
    return new CarsDB().findAll();
}

export async function getCarsByColor(clr: string): Promise<any> {
    let query = { color: clr }
    return new CarsDB().findAll(query);
}

export async function add(car: Car) {
    
}



