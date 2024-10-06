import { useState, useEffect } from "react"

function HooksTwo() {

    const [count, setCount] = useState(0)
    const [colour, setColour] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${colour}`
    }, [count])

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function changeColour() {
        setColour(prevColour => prevColour == "green" ? "red" : "green")
    }

    return (
        <div>
            <p style={{ color: colour }}>Count : {count}</p>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button><br />
            <button onClick={changeColour}>Change colour </button>
        </div>
    )

}

export default HooksTwo