import React from 'react';
import AddTodo from '../addtodo/AddTodo';
import Todos from '../todos/Todos';

// Import Styless
import './home.css';

const Home = () => {
    const dummyTodos = [
        {
            id: 1,
            title: "This Is Todo 01",
            desc: "This Is Todo 01 Description"
        },
        {
            id: 2,
            title: "This Is Todo 02",
            desc: "This Is Todo 02 Description"
        },
        {
            id: 3,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 4,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 5,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 6,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 7,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 8,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 9,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 10,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 11,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
        {
            id: 12,
            title: "This Is Todo 03",
            desc: "This Is Todo 03 Description"
        },
    ];

     
    return (
        <div className='home'>
            <h1 className="main-title">React Todo App</h1>
            <AddTodo />
            <Todos todos={dummyTodos} />
        </div>
    );
}

export default Home;
