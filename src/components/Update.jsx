import { useState } from "react"
function Update() {

    const [foods, setFoods] = useState(["apple", "banana", "carrot"])

    function handleAdd() {
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
        setFoods(prevFoods => ([...prevFoods, newFood]))

    }
    function handleRemove(index) {
        setFoods(foods.filter((_, i) => i !== index)) //underscore means parameter is ignored
    }

    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemove(index)} style={{ cursor: "pointer" }}>
                        {food}
                    </li>)}
            </ul>

            <input type="text" placeholder="Enter a fruit" id="foodInput" />
            <button value={foods} onClick={handleAdd}>Add</button>

        </div>
    )

}

export default Update