import { useState } from "react"

function Colours() {
    const [colour, setColour] = useState("");

    function handleColour(e) {
        setColour(e.target.value)
    }

    return (
        <div className="colour-picker-container">
            <h1>Colour Picker</h1>
            <div className="colour-display" style={{ backgroundColor: colour }}>
                <p>Selected Colour: {colour}</p>
            </div>
            <label>Select a Colour: </label>
            <input type="color" value={colour} onChange={handleColour}></input>

        </div>
    )


}

export default Colours