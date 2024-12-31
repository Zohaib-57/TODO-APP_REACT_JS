import React from 'react'

const TodoItem = ({ item, task, setTask }) => {
    function handleDelete(item) {
        setTask(task.filter((task) => task !== item));
    }
    
    function handleClick(name) {
        const newTaskSet = task.map((todo) =>
            todo.name === name ? { ...todo, done: !todo.done } : todo
        );
        setTask(newTaskSet); // Update the state with the toggled task
    }

    let className = item.done ? "line-through text-black" : "text-gray-700";

    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm flex items-center justify-between">
            <span className={className} onClick={() => handleClick(item.name)}>
                {item.name}
            </span>
            <button 
                onClick={() => handleDelete(item)} 
                className='bg-red-600 border border-black rounded-md px-3'>
                X
            </button>
        </div>
    );
};

export default TodoItem;
