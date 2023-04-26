import React from 'react'

const EditTodoForm = (props) => {
    const [value, setValue] = React.useState(props.task)
    const handleChange = (event) =>{
        setValue(event.target.value) 
    }
    const handleSubmit = (event) =>{
        event.preventDefault() 
        props.editTodo(value, props.id)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text"  
        className='todo-input' 
        placeholder='Update Task'
        value = {value}
        onChange={handleChange}
        />
        <button className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm