import { useContext } from "react"
import { UserContext } from "./ComponentA"
import ComponentD from "./ComponentD"

function ComponentC() {

    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`vanakkam da mapla ${user}`}</h2>
            <ComponentD />
        </div>
    )

}

export default ComponentC