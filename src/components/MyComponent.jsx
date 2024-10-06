import { useState } from "react"

function MyComponent() {
    const [cars, setCars] = useState([]);

    const [year, setYear] = useState(new Date().getFullYear())
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")

    function handleAdd() {
        const newCar = { year: year, make: make, model: model }
        setCars(prevCars => [...prevCars, newCar])

        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }

    function handleRemove(index) {
        setCars(prevCars => prevCars.filter((_, i) => i !== index))

    }

    function handleYear(e) {
        setYear(e.target.value)
    }

    function handleMake(e) {
        setMake(e.target.value)
    }

    function handleModel(e) {
        setModel(e.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemove(index)} style={{ cursor: "pointer" }}>
                        {car.year} {car.make} {car.model}
                    </li>)}

            </ul>

            <input type="number" value={year} onChange={handleYear} /><br />
            <input type="text" value={make} onChange={handleMake} placeholder="Enter the car" /><br />
            <input type="text" value={model} onChange={handleModel} placeholder="Enter the model" /><br />
            <button onClick={handleAdd}>Add Cars</button>
        </div>
    )


}

export default MyComponent