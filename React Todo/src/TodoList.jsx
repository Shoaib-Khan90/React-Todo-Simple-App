import { useState } from "react"
import './todolist.css'
export default function Todolist(){
    let [todos , setTodos] = useState (["Simple tasks"])
    let [newtodo , setNewtodo] = useState ([]);

    let addNewtasks = () =>{
      setTodos([...todos, newtodo])
      setNewtodo("")
    }

    let Newtodolist = (event) => {
        setNewtodo(event.target.value)
    }
    return (
        <div className="todo-container">
            <h3>Todo List</h3>
            <div  className="input-box">
            <input type="text" placeholder="Enter your tasks" value={newtodo} onChange={Newtodolist}/>
            <button onClick={addNewtasks}>Add tasks</button>
            <br /><br /><br /><br />
            </div>
            <ul>
                {
                    todos.map ((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}