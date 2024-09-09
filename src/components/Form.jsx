import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/todoContext";


function Form() {
    const {addTodo, activeTodoId, todos, editTodo}= useContext(TodoContext)
    const [input, setInput]= useState("")

    useEffect(()=>{
      activeTodoId!==null &&  setInput(todos[activeTodoId].content)
    }, [activeTodoId])

    function resetInput(){
        setInput("")
    }

    const validateTodo=()=>{
      if(input.length>0) return true
      return false;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!validateTodo()) return

        if(activeTodoId!== null){
          editTodo(input)
          resetInput()
          return
        }
        addTodo(input)
        resetInput()
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your todo" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button>{activeTodoId!==null ? "Edit " : "Add "}Todo</button>
    </form>
  )
}

export default Form