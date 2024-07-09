import { createContext, useState } from "react";
import { GET, POST, PUT } from "../api";
import { UserType } from "../types/props.type";

export const UserContext = createContext({});

export default function UserContextProvider({ children }: any) {

    const [user, setUser] = useState({});

    async function login(email: string, password: string) {
        let userToSend = { email, password };
        //API הכתובה בקובץ  POST הפעלת פעולה ה
        let u = await POST('users/login', userToSend);
        console.log('u ==> ', u);
    }

    async function getAllUsers() {
        return await GET('users/');
    }

    async function updateImage(user: UserType) {
        return await PUT(`users/update/${user._id}`, user);
    }

    const values = {
        user,
        login,
        getAllUsers,
        updateImage
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}