import React from 'react'

const TodoForm = (props) => {
    const [value, setValue] = React.useState("")
    const handleChange = (event) =>{
        setValue(event.target.value) 
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addTodo(value)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text"  
        className='todo-input' 
        placeholder='What is the task Today?'
        value = {value}
        onChange={handleChange}
        />
        <button className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm