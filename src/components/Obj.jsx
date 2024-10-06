import { useState } from "react"

function Obj() {
    const [car, setCar] = useState({ year: 0, make: "", model: "" })

    function handleYear(e) {
        setCar(prevCar => ({ ...prevCar, year: e.target.value }))
    }

    function handleMake(e) {
        setCar(prevCar => ({ ...prevCar, make: e.target.value }))
    }

    function handleModel(e) {
        setCar(prevCar => ({ ...prevCar, model: e.target.value }))
    }

    return (
        <div>
            <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYear} placeholder="Enter the year" /> <br />
            <input type="text" value={car.make} onChange={handleMake} placeholder="Enter who made it" /> <br />
            <input type="text" value={car.model} onChange={handleModel} placeholder="Enter the model" /> <br />
        </div>
    )

}
export default Obj