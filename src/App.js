import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';

function App() {

  const [todos, setTodos] = useState([
    {
    body: "Create to-do list",
    completed: false
    },
    {
      body: "laundry",
      completed: true
    },
    {
      body: "buy more garlic",
      completed: false
    },
  ])

  const createTodo = (todo) => {
    console.log(todo)
    setTodos([...todos, todo]);
    console.log(setTodos)
  }
    
  const updateTodo = (idx) => {
    //copy all todos
    const copyTodos = [...todos];
    // changing the array
    copyTodos[idx].completed = !copyTodos[idx].completed;
    setTodos(copyTodos);
  }  

  const deleteTodo =(deletedIdx) => {
    setTodos(todos.filter((todo, i) => i !== deletedIdx ? true : false));
  };

  
  return (
    <div className="App">
      <h1>To-Do List</h1>
    {/* first createTodo is from app page, the second one calls on the createtodo function on the NewToDo page   */}
      <NewToDo createTodo={createTodo}/>
      <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;
