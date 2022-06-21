import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTodo from '../addtodo/AddTodo';
import Todos from '../todos/Todos';

// Import Styless
import './home.css';

const Home = () => {
    // Deaclare All State
    const [todos, setTodos] = useState([]);

    // Deaclare All Methods
    const handleAddTodo = (formData) => {
        const {title, desc} = formData;

        setTodos((oldTodos) => {
            return [...oldTodos, {id: uuidv4(), title, desc}];
        });

    }

    const removeTodo = (id) => {
        const filteredTodo = todos.filter((todo) => todo.id != id);

        setTodos(filteredTodo);
    }

    return (
        <div className='home'>
            <h1 className="main-title">React Todo App</h1>
            <AddTodo onData={handleAddTodo} />
            <Todos todos={todos} onRemove={removeTodo} />
        </div>
    );
}

export default Home;
