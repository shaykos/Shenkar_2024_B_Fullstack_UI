import { useState, useContext, FormEvent } from "react";
import { MemberContext } from "../context/memberContext";
import { member } from "../types/memberTypes";

export default function Regsiter() {
    const { addMember } = useContext(MemberContext);

    const [user, setUser] = useState<member>({});

    function addNewMember(event: FormEvent) {
        event.preventDefault();
        addMember(user);
    }

    return (
        <>
            <div>Regsiter</div>
            <form onSubmit={addNewMember}>
                <input type="text" value={user.firstName} placeholder="first name..."
                    onChange={(event) => setUser((prev) => {
                        return { ...prev, firstName: event.target.value }
                    })} />
                <button>add</button>
            </form>
        </>
    )
}
