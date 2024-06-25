import { MongoClient } from "mongodb";

const DB_INFO = {
    connection: process.env.CONNECTION_STRING as string,
    name: process.env.DB_NAME,
    collection: 'Users'
}

/**
 * @param query - specify the criteria
 * @param project - specify which fields should be included or excluded in the query results.
 */
export async function findUsers(query = {}, projection = {}) {
    //מייצר את האובייקט שבאמצעותו נתחבר למסד הנתונים ונבצע שאילתות
    let mongo = new MongoClient(DB_INFO.connection);
    try {
        //התחברות למסד הנתונים
        await mongo.connect();
        //ביצוע שאילתה
        let users = await mongo.db(DB_INFO.name).collection(DB_INFO.collection).find(query, { projection }).toArray();
        return users;
    } catch (error) {
        throw error;
    }
    finally {
        //סגירת החיבור למסד הנתונים
        mongo.close();
    }
}