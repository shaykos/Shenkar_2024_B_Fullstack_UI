import { createContext, useState } from "react";

export const SolarSystem = createContext({});

export default function SolarSystemProvider({ children }: any) {

    const [stars, setStars] = useState<string[]>([]);

    //פונקציה המקבלת את שם הכוכב ומוסיפה אותו במידה ולא קיים כבר במאגר
    function addStar(name: string) {
        let star = stars.find((item) => item === name);
        if (!star)
            setStars([...stars, name]);
    }

    //נכתוב את כל מידע והפעולות שנרצה לשתף עם דפים אחרים או קומפוננטות אחרות
    const value = {
        stars,
        addStar,
        //deleteStar
    }


    return (
        <SolarSystem.Provider value={value as any}>
            {children}
        </SolarSystem.Provider>
    )
}

// <div>
//      <p></p>
// </div>

