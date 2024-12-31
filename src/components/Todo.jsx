import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
    // const [todo, setTodo] = useState("")
    const [todo, setTodo] = useState({name:"",done:false});
    const [task, setTask] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        todo.name.trim() === ""? alert("Task cannot be empty"): setTask([...task, todo]);
        setTodo({name:"",done:false})
    }
    const completedTask =task.filter((todo)=>todo.done).length
    return (
        //we can use css module to style the component OR do inline styling
        //we are using tailwindcss to style the component
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-6">Todo List</h1>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-md">Total tasks: {task.length}</p>
                        <p className="text-md">Completed tasks: {completedTask}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
                    <input
                        type="text"
                        value={todo.name}
                        onChange={(e) => setTodo({name:e.target.value,done:false})}
                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Add a new task..."/>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Add
                    </button>
                </form>

                <ul className="space-y-3">
                    {task.map((item, index) => (
                        <TodoItem key={item.name} item={item} task={task} setTask={setTask}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo
