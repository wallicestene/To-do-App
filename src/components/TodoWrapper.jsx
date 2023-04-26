import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from "./EditTodoForm"

import {v4 as uuidv4 }from "uuid"
uuidv4()

const TodoWrapper = () => {
    const [todos, setTodos] = React.useState([])
    const addTodo =(todo)=>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, edited: false }])

    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.completed} : todo))
    } 
    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo =(id)=>{
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, edited: !todo.edited} : todo ))
    }
    const editTask =(task, id)=>{
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, task, edited : !todo.edited } : todo))
    }
  return (
    <div className='TodoWrapper'>
       <h1>Get Things Done!</h1>
       <TodoForm addTodo={addTodo}/>  
       {todos.map((todo, index) =>
        (todo.edited ? 
            <EditTodoForm editTodo={editTask} task={todo.task} id={todo.id}/> :   
        <Todo 
        completed ={todo.completed}
        id={todo.id}
        task={todo.task} 
        key={index}
        toggleComplete={toggleComplete}
        deleteTodo = {deleteTodo}
        editTodo={editTodo}
        />
        
        ))}
    </div>
  )
}

export default TodoWrapper