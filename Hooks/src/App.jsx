import React, { useState } from 'react'

const App = () => {
  const[task,setTask] = useState("");
  const[todos,setTodos] = useState([])

  const addTodo = () =>{
    if (task =="" || task == " ") return;
    setTodos([...todos,task]);
    setTask("");
  };

  return (
    <div>
      <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" placeholder='Enter Task Name' />
      <button onClick={addTodo}>Add Task</button>

      <ul>
      {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
      ))}
      </ul>
    </div>
  )
}

export default App