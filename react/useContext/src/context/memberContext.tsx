import { createContext, useState } from "react";
import { member } from "../types/memberTypes";

export const MemberContext = createContext({});

export default function MemberContextProvider({ children }: any) {

    const [members, setMembers] = useState<member[]>([]);

    function addMember(user: member) {
        if (!user.firstName) {
            alert("STOP!");
            return;
        }

        if (user.firstName == "") {
            alert("name is empty!")
            return;
        }
        setMembers((prev) => [...prev, user]);
    }

    //הערכים והפונקציות המשותפות לכל הילדים
    const value = {
        members,
        addMember
    }

    return (
        <MemberContext.Provider value={value}>
            {children}
        </MemberContext.Provider>
    )
}
