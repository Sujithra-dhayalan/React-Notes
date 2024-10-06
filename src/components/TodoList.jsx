import { useState } from "react"

function Todo() {
    const [tasks, setTasks] = useState(["Take a shower", "Eat", "Code", "Sleep"])
    const [newTask, setNewTask] = useState("")

    function handleInput(e) {
        setNewTask(e.target.value)
    }

    function addTask() {

        //trim removes all the white spaces

        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index - 1]
            updatedTasks[index - 1] = temp
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index + 1]
            updatedTasks[index + 1] = temp
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="container">
            <h2>ToDo List App</h2>
            <div>
                <input type="text" value={newTask} onChange={handleInput} placeholder="Enter a new task" />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>


            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text"> {task} </span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-up" onClick={() => moveTaskUp(index)}>Move up</button>
                        <button className="move-down" onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>)}

            </ol>
        </div>
    )
}

export default Todo