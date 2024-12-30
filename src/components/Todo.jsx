import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todo,setTodo] = useState("")
    const [task,setTask] =useState([])
   function handleSubmit(e){
       e.preventDefault()
       setTask([...task,todo])
       setTodo("")
       console.log(todo);
       
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}  className='border border-black'/>
        <button type='submit' className='border border-black px-2 mx-3'>Add</button>
        </form>
        {console.log([task])};
    </div>
    </>
  )
}

export default Todo