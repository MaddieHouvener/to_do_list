import React, { useState } from 'react';

const NewToDo = ({createTodo, todo}) => {

const [todoText, setTodoText] = useState("");

const submitTodo = (e) => {
    e.preventDefault();

    createTodo({
        'body': todoText,
        'completed': false
    });
    setTodoText("");
}

    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/>
                <input type="submit" value="Create a new to-do!"/>
            </form>
        </div>
    )
}
export default NewToDo;