import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDoItem = ({todo, idx, updateTodo, deleteTodo}) => {

const checked = {
    'text-decoration': 'line-through'
}
const unchecked = {};

    return (
        <>
            <p style={todo.completed ? checked : unchecked }>
                {todo.body}: 
                <input type="checkbox" checked={todo.completed} onClick={(e) => 
                {
                    updateTodo(idx)
                }}/>
            <button onClick={(e) => { deleteTodo(idx)}}>Delete</button>
                </p>
        </>
    )
}
export default ToDoItem;