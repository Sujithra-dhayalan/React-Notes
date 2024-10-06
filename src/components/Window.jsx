import { useState, useEffect } from "react";

function Window() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }//clean up code 
    }, [])

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`
    })

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <div>
            <h2>Window Width: {width}px</h2>
            <h2>Window Height: {height}px</h2>
        </div>
    )
}

export default Window;