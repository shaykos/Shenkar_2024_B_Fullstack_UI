import { Request, Response } from "express";
import { User } from "./user.type";
import { getAllUsers, findUserById } from "./user.model";

export async function getAll(req: Request, res: Response) {
    try {
        let users = await getAllUsers();
        if (users?.length == 0)
            res.status(200).json({ message: 'empty users', users });
        else
            res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function getUserById(req: Request, res: Response) {
    let { id } = req.params; //url שליפת הפרמטר מתוך ה 
    if (id.length != 24)
        return res.status(500).json({ message: 'must provide a valid id'});
    try {
        let user = await findUserById(id);
        if (!user)
            res.status(400).json({ message: 'user not found' });
        else
            res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function login(req: Request, res: Response) {

}

export async function register(req: Request, res: Response) {

}

export async function updateUser(req: Request, res: Response) {

}

export async function deleteUser(req: Request, res: Response) {

}
