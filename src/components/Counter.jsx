// about update function: it also considers the previous value
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        // normal form : setCount(count + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1) //basically when we use the normal form it will increase it only by one, no matter how many times we repeat the same line. Incase of the update function, it repeats the action each time we repeat the line
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}> Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>

        </div>
    )

}

export default Counter;