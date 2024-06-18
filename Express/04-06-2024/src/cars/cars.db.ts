import { MongoClient, ObjectId } from 'mongodb';
import { Car } from './cars.model';

export class CarsDB {
    connection_string: string;
    db_name: string;
    client: MongoClient;
    collection = "cars";

    constructor() {
        this.connection_string = process.env.CONNECTION_STRING as string;
        this.db_name = process.env.DB_NAME as string;
        this.client = new MongoClient(this.connection_string);
    }

    async findAll(query = {}, project = {}) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(this.collection).find(query).toArray();
        } catch (error) {
            throw error;
        }
        finally {
            this.client.close();
        }
    }

    async insert(car: Car) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(this.collection).insertOne(car);
        } catch (error) {
            throw error;
        }
        finally {
            this.client.close();
        }
    }

}














// class DB {
//     db_uri;
//     db_name;
//     client;

//     constructor() {
//         this.db_uri = process.env.DB_URI;
//         this.db_name = process.env.DB_NAME;
//         this.client = new MongoClient(this.db_uri);
//     }

//     async FindAll(collection, query = {}, project = {}) {
//         try {
//             await this.client.connect();
//             return await this.client.db(this.db_name).collection(collection).find(query, project).toArray();
//         } catch (error) {
//             throw error;
//         }
//         finally {
//             await this.client.close();
//         }
//     }

//     async FindOne(collection, query = {}, project = {}) {
//         try {
//             await this.client.connect();
//             return await this.client.db(this.db_name).collection(collection).findOne(query, project);
//         } catch (error) {
//             throw error;
//         }
//         finally {
//             await this.client.close();
//         }
//     }

//     async Insert(collection, doc) {
//         try {
//             await this.client.connect();
//             return await this.client.db(this.db_name).collection(collection).insertOne(doc);
//         } catch (error) {
//             throw error;
//         }
//         finally {
//             await this.client.close();
//         }
//     }

//     async UpdateById(collection, id, doc) {
//         try {
//             await this.client.connect();
//             console.log({ ...doc });
//             return await this.client.db(this.db_name).collection(collection).updateOne(
//                 { _id: new ObjectId(id) },
//                 { $set: { ...doc } });
//         } catch (error) {
//             throw error;
//         }
//         finally {
//             await this.client.close();
//         }
//     }

// }

// module.exports = DB;