import { ObjectId } from "mongodb";
import { findUsers } from "./user.db";
import { User } from "./user.type";

export async function getAllUsers() {
    return await findUsers();
}

export async function findUserById(id: string) {
    try {
        let query = { _id: new ObjectId(id) }
        let users = await findUsers(query);
        return users[0];
    } catch (error) {
        throw error;
    }

}