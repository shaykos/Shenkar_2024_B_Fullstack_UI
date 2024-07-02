import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }: any) {

    const [user, setUser] = useState({});

    async function login(email: string, password: string) {
        let userToSend = { email, password };
        try {
            //fetch --> קבלת מידע מכתובת מסוימת באינטרנט
            let res = await fetch('https://shenkar-2024-b-fullstack-ui.onrender.com/api/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userToSend)
            });

            console.log('res ==> ', res);

            //הסטטוס הוא לא מקבוצת 200
            if(!res.ok){
                console.log({res});
                return;
            }

            //json גוף התשובה מוסתר ולכן נמתין להמרה ל 
            let data = await res.json();

            console.log('data ==> ', data);

        } catch (error) {
            console.error({ error });
        }



    }

    const values = {
        login,
        user
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}