import React from 'react'

const TodoItem = ({ item }) => {
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-700">{item}</h3>
        </div>
    )
}

export default TodoItem
