import { useState, useEffect, useRef } from "react"

function Reference() {
    // let [number, setNumber] = useState(0);

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("Component rendered")
    })

    function handleClick1() {
        // ref.current = ref.current + 1
        // // or ref.current++;
        // console.log(ref.current)
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "lightcoral"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2() {

        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "lightcoral"
        inputRef3.current.style.backgroundColor = ""

    }

    function handleClick3() {

        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "lightcoral"
    }


    return (
        <div>
            <button onClick={handleClick1}>Click 1</button>
            {/* ref => a special attribute used to create a reference element */}
            <input ref={inputRef1}></input>

            <button onClick={handleClick2}>Click 2</button>
            <input ref={inputRef2}></input>

            <button onClick={handleClick3}>Click 3</button>
            <input ref={inputRef3}></input>

        </div>
    )
}

export default Reference