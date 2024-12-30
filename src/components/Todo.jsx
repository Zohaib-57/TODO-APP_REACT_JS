import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todo,setTodo] = useState("")
    const [task,setTask] =useState([])
   function handleSubmit(e){
       e.preventDefault()
       setTask([...task,todo])
       setTodo("")
    //    console.log(todo);
       
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}  className='border border-black'/>
        <button type='submit' className='border border-black px-4 mx-4'>Add</button>
        </form>
        {/* {console.log([task])};  */}

        {task.map((item)=>(
           <TodoItem key={item} item={item} />
        ))}
        
        </div>
    </>
  )
}

export default Todo