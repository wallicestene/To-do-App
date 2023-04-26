import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todo = (props) => {
  return (
    <div className='Todo'>
        <p onClick={() => props.toggleComplete(props.id)} className={props.completed ? "completed" : ""}>{props.task}</p>
        <div> 
            <FontAwesomeIcon icon= {faPenToSquare} onClick={() => props.editTodo(props.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => props.deleteTodo(props.id)}/>
        </div>
    </div> 
  )
}

export default Todo