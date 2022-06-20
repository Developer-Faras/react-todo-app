import React from 'react';
import Todo from '../todo/Todo';

// import styles
import './todos.css';

const Todos = (props) => {
    return (
        <div className='todos'>
            {props.todos.map((todo, index) => <Todo key={index} todoData={todo} />)}
        </div>
    );
}

export default Todos;
