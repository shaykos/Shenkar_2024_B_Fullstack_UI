import { FormEvent, useContext, useState } from "react"
import { SolarSystem } from "../context/SolarSystemContext"

export default function Form() {
    const { addStar } = useContext<any>(SolarSystem);

    const [starName, setStarName] = useState<string>("");

    function raiseUp(event: FormEvent) {
        event.preventDefault();
        addStar(starName);
        setStarName("");
    }

    return (
        <>
            <form onSubmit={raiseUp}>
                <input type="text"
                    placeholder="enter name..."
                    value={starName}
                    onChange={(event) => setStarName(event.target.value)}
                />
                <button type="submit">Add Star</button>
            </form>
        </>
    )
}
