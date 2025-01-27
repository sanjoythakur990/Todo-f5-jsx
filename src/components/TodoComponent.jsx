import { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"

function TodoComponent({todo, id}) {
  const {deleteTodo, setActiveTodoId}= useContext(TodoContext)
  return (
    <div className="todo">
        <p><b>Id: {id}</b></p>
        <p>{todo.content}</p>
        <div className="buttons">
            <button onClick={()=> setActiveTodoId(id)}>Edit</button>
            <button onClick={()=> deleteTodo(id)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoComponent