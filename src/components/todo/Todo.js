import React from 'react';

// Import Icons
import { FaTrashAlt } from "react-icons/fa";

// Import Styles
import './todo.css';

const Todo = (props) => {
    const {id, title, desc} = props.todoData;

    const handleDelete = () => {
        props.onRemove(id);
    }

    return (
        <div className='todo' id={id} >
            <div className="text-container"> 
                <h4 className="title">{title}</h4>
                <p className="desc">{desc}</p>
            </div>
            <div className="delete-container"> 
                <button onClick={handleDelete} className="delete-btn">{<FaTrashAlt />}</button>
            </div>
        </div>
    );
}

export default Todo;
