import PropTypes from 'prop-types'

function List(props) {
    // const fruits = [
    //     { id: 1, name: 'orange', calories: 45 },
    //     { id: 2, name: 'pineapple', calories: 37 },
    //     { id: 3, name: 'banana', calories: 105 },
    //     { id: 4, name: 'apple', calories: 95 }]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //Reverse order
    // fruits.sort((a, b) => a.calories - b.calories) //Numberic order
    // fruits.sort((a, b) => b.calories - a.calories) //Reverse order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: <b>{item.calories}</b></li>)

    return (
        <div>
            <h2>{category}</h2>
            <ul>{listItems}</ul>
        </div>)

}

List.prototype = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

// insert these in app.js file
{/*const fruits = [
    { id: 1, name: 'orange', calories: 45 },
    { id: 2, name: 'pineapple', calories: 37 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'apple', calories: 95 }]


  const vegetables = [
    { id: 6, name: 'potatoes', calories: 110 },
    { id: 7, name: 'carrots', calories: 15 },
    { id: 8, name: 'corn', calories: 25 },
    { id: 5, name: 'broccoli', calories: 50 }]
  return (
    <>

      {fruits.length > 0 && <List items={fruits} category={"Fruits"} />}
      {vegetables.length > 0 && <List items={vegetables} category={"Vegetables"} />}   the second statement will always be true, so it checks the first statement if true it executes
    </>
  );
  */}

export default List;