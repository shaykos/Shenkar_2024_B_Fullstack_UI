import { useContext } from "react"
import { SolarSystem } from "../context/SolarSystemContext"

export default function StarList() {

    const { stars } = useContext<any>(SolarSystem);

    if (stars.length == 0)
        return <h1>Empty Stars List</h1>
    else
        return (
            <>
                <h1>Stars List</h1>
                <ul>
                    {stars.map((star: string) => <li>{star}</li>)}
                </ul>
            </>
        )

    // return (
    //     <>
    //         <h1>Stars List</h1>
    //         {
    //             (stars.length == 0) ? null
    //                 :
    //                 <ul>
    //                     {
    //                         stars.map((star: string) => <li>{star}</li>)
    //                     }
    //                 </ul>
    //         }
    //     </>
    // )
}
