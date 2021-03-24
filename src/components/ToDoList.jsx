import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos, updateTodo, deleteTodo}) => {

    return (
        todos.map((todo, idx) =>
            <ToDoItem todo={todo} idx={idx} key={idx} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        )
    )
}
export default ToDoList;