import { Request, Response } from "express";
import { getAllUsers, findUserById, loginUser, registerUser, updateUser, deactiveUser, removeUser } from "./user.model";
import { User } from "./user.type";
import { decryptPassword, encryptPassword } from "../utils/utils";

export async function getAll(req: Request, res: Response) {
    try {
        let users = await getAllUsers();
        if (users?.length == 0)
            res.status(200).json({ message: 'empty users', users });
        else
            res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function getUserById(req: Request, res: Response) {
    let { id } = req.params; //url שליפת הפרמטר מתוך ה 

    if (id.length != 24)
        return res.status(500).json({ message: 'must provide a valid id' });
    try {
        let user = await findUserById(id);
        if (!user)
            res.status(400).json({ message: 'user not found' });
        else
            res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function login(req: Request, res: Response) {
    let { email, password } = req.body;
    //בדיקה - אם לא נשלחו אימייל וסיסמה תחזיר את ההודעה 
    if (!email || !password)
        return res.status(400).json({ message: 'invalid email or password' });
    try {
        let user = await loginUser(email);
        if (!user)
            res.status(404).json({ message: 'user not found' });
        //הפעלת הפונקציה לפענוח הסיסמה
        else if (decryptPassword(password, user.password))
            res.status(200).json({ user });
        else
            res.status(400).json({ message: 'invalid email or password' });
        
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function register(req: Request, res: Response) {
    let { email, full_name, password } = req.body;
    if (!email || !password || !full_name)
        return res.status(400).json({ message: 'missing info' });

    try {
        //הפעלת הפונקציה להצפנת הסיסמה
        password = encryptPassword(password);
        let user: User = { email, password, full_name }
        let result = await registerUser(user);
        if (!result.insertedId)
            res.status(400).json({ message: 'registration failed' });
        else {
            user._id = result.insertedId;
            res.status(201).json({ user });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function update(req: Request, res: Response) {
    let { id } = req.params;
    let { email, full_name, grade } = req.body;

    if (!id || id.length < 24)
        return res.status(400).json({ message: 'must provide a valid id' });

    if (!email || !full_name)
        return res.status(400).json({ message: 'must provide an email and full_name' });

    try {
        let result = await updateUser(id, email, full_name, grade);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function physicDeleteUser(req: Request, res: Response) {
    let { id } = req.params;

    if (!id || id.length < 24)
        return res.status(400).json({ message: 'must provide a valid id' });

    try {
        let result = await removeUser(id);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function logicDeleteUser(req: Request, res: Response) {
    let { id } = req.params;

    if (!id || id.length < 24)
        return res.status(400).json({ message: 'must provide a valid id' });

    try {
        let result = await deactiveUser(id);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
}

