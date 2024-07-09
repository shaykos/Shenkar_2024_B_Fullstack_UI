import { useEffect, useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import User from "../components/User";
import { UserType } from "../types/props.type";

export default function Users() {
    const { getAllUsers } = useContext<any>(UserContext);
    const [users, setUsers] = useState<UserType[]>([]);

    //show all users
    async function getUsers() {
        let res = await getAllUsers();
        setUsers(res.users);
    }
    useEffect(() => {
        getUsers()
    }, []);

    //TODO: change profile image
    function updateUserImage(user: UserType) {
        console.log(user)
    }

    return (
        <div>
            <h1>Users</h1>
            {users.length != 0 ? users.map(u => <User {...u} updateUserImage={() => updateUserImage(u)} />) : null}
        </div>
    )
}
