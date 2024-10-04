// tells about onChange event handler
import { useState } from "react";

function Two() {

    const [name, setName] = useState("Enter your name");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [ship, setShip] = useState("")

    function handle(e) {
        setName(e.target.value)
    }

    function handleQuantity(e) {
        setQuantity(e.target.value)
    }

    function handleComment(e) {
        setComment(e.target.value)
    }

    function handlePayment(e) {
        setPayment(e.target.value)
    }

    function handleShip(e) {
        setShip(e.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={(e) => handle(e)} />
            <h2>Name:{name}</h2>
            <input type="number" value={quantity} onChange={(e) => handleQuantity(e)} />
            <h2>Quantity:{quantity}</h2>

            < textarea value={comment} onChange={(e) => handleComment(e)} placeholder="comments" />
            <p>{comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment:{payment}</p>

            <label ><input type="radio" value="Pick Up" checked={ship === "Pick Up"} onChange={handleShip} /> Pick Up</label>
            <label ><input type="radio" value="Delivery" checked={ship === "Delivery"} onChange={handleShip} />Delivery</label>
            <p>Shipping method: {ship}</p>
        </div>
    )

}

export default Two;