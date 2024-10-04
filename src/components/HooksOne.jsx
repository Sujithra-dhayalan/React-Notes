import { useState } from "react"

function HooksOne() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Sujithra");
    }
    const incrementAge = () => {
        setAge(age + 1)
    }
    const employing = () => {
        setIsEmployed(true)
    }

    return (
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>click</button>

            <p>Age:{age}</p>
            <button onClick={incrementAge}>click</button>

            <p>Is employed:{isEmployed ? "Yes" : "No"}</p>
            <button onClick={employing}>click</button>
        </div>
    )
}

export default HooksOne