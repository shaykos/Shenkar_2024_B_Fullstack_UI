import { useState } from "react"


export default function App() {
    const [tasks, setTasks] = useState<string[]>([
        "Study",
        "Work",
        "Eat",
        "Drink",
        "Sleep",
    ]);

    const [show, setShow] = useState(false) 

    return (
        <>
            <p data-test="p-welcome">kuku</p>
            <img data-test="test-img" src="https://docs.cypress.io/img/logo/cypress-logo-light.svg" alt="" />
            <ul data-test="test-tasks">
                {
                    //test-btn 
                    tasks.map((task, index) => <li key={index}>{task}</li>)
                }
            </ul>
            <button data-test="test-btn" onClick={()=>setShow(true)}>Click!</button>
            {show && <p data-test="test-text">You can see me now</p>}
        </>
    )
}
