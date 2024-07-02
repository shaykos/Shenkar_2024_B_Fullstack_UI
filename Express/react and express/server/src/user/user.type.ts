import { ObjectId } from "mongodb"

export type User = {
    _id?: ObjectId,
    full_name: string,
    password?: string,
    email: string
    grade?: number
} 
