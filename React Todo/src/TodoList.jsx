import { useState } from "react"
import './todolist.css'
import { v4 as uuidv4 } from 'uuid';


export default function Todolist(){
    let [todos , setTodos] = useState ([{tasks: "Simple tasks" , id: uuidv4()}])
    let [newtodo , setNewtodo] = useState ([]);

    let addNewtasks = () =>{
      setTodos((pretodo)=>{
        return [...pretodo, {tasks : newtodo, id: uuidv4()}]
      })
      setNewtodo("")
    }

    let deletebtn = (id) =>{
        setTodos(todos.filter((todo) => todo.id !=id))
    }

    let Newtodolist = (event) => {
        setNewtodo(event.target.value)
    }

    let Uppercase = () =>{
        setTodos (
            todos.map((todo) =>{
                return {
                    ...todo ,
                    tasks : todo.tasks.toUpperCase(), 
                }
            } )
        )
    }
    
    let Lowercase = () =>{
        setTodos (
            todos.map ((todo) => {
                return {
                    ...todo,
                    tasks : todo.tasks.toLowerCase(),
                }
            })
        )
    }

let Editbtn = (id) => {
  let newText = prompt("Enter new value");

  if (!newText) return;

  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, tasks: newText } : todo
    )
  );
};
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
                        <li key={todo.id}>
                            {todo.tasks}
                            <button onClick={() => deletebtn(todo.id)} className="btn1">Delete</button>
                            <button onClick={() => Editbtn(todo.id)} className="btn">Edit</button>
                        </li>
                    ))
                }
            </ul>

            <div>
                <button onClick={Uppercase} className="btn">UpperCase</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={Lowercase} className="btn">LowerCase</button>
            </div>
        </div>
    )
}