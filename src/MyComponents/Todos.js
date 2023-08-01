import React from 'react'
import { Todo } from "./Todo";
export const Todos = (props) => {
    let todoStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className='container my-6' style={todoStyle}>
            <h3 className='my-3'>Todos List</h3>

            {props.todos.length === 0 ? "No Todos To Display" :
                props.todos.map((todo) => {
                    return <Todo key={todo.srNo} todo={todo} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
