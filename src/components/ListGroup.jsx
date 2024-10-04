import { useState } from "react";

function ListGroup() {

    const items = [
        'Mango',
        'Butterfruit',
        'Apple',
        'Custard apple',
        'kiwi',
        'cherry'
    ];

    const [item, setItem] = useState('')

    function clicking(id) {
        setItem(id)
    }


    return (
        <div>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item" onClick={() => clicking(item)}>{item}</li>)}
            </ul>
            <p>You clicked {item}</p>
        </div>
    )
}

export default ListGroup;


