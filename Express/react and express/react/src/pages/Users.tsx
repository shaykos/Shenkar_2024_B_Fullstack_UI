import { useEffect, useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import User from "../components/User";
import { UserType } from "../types/props.type";

export default function Users() {
    const { getAllUsers, updateImage } = useContext<any>(UserContext);
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
    async function updateUserImage(user: UserType, image: string) {
        user.image = image;
        console.log(user);

        setUsers((prev) => [...prev.map(u => u._id == user._id ? user : u)]);
        let res = await updateImage(user);
        console.log('res from updateUserImage', res);
    }

    return (
        <div>
            <h1>Users</h1>
            {users.length != 0 ? users.map(u => <User u={u} updateUser={updateUserImage} />) : null}
        </div>
    )
}
