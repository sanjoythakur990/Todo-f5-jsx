
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import List from "./components/List"

function App() {
  // const [todos, setTodos]= useState([]);
  // const addTodo=(value)=>{
  //   const temp= [...todos]
  //   temp.push({content: value})
  //   setTodos(temp)
  // }

  // const deleteTodo=(id)=>{
  //   const temp=[...todos]
  //   temp.splice(id, 1)
  //   setTodos(temp)
  // }
  return (
    <>
      {/* <Header addTodo={addTodo}/>
      <List todos={todos} deleteTodo={deleteTodo}/> */}


      <Header />
      <List />
    </>
  )
}

export default App
