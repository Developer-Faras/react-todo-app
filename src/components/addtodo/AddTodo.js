import React from 'react';

// Import Styles
import './addtodo.css';

const AddTodo = () => {
    return (
        <div className='add-todo'>
            <form action="">
                <div className="input-box"> 
                    <input type="text" name="title" id="title" placeholder='Enter Your Title...' />
                    <input type="text" name='desc' id='desc' placeholder='Enter Your Description...' />
                </div>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
}

export default AddTodo;
