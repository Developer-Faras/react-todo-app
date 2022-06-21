import React, {useState} from 'react';

// Import Styles
import './addtodo.css';






const AddTodo = (props) => {
    // Deaclare All State
    const [formValue, setFormValue] = useState({title: '', desc: ''});

    // All Destructuring
    const {title, desc} = formValue;

    // All Methods
    const handleInputChanges = (evt) => {
        const inputName = evt.target.name;
        const inputValue = evt.target.value;

        setFormValue((oldData) => {
            return {...oldData, [inputName]: inputValue};
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.onData(formValue);

        setFormValue({title: '', desc: ''})
    }

    return (
        <div className='add-todo'>
            <form action="" onSubmit={handleFormSubmit}>
                <div className="input-box"> 
                    <input type="text" onChange={handleInputChanges} value={title} required name="title" id="title" placeholder='Enter Your Title...' />
                    <input type="text" onChange={handleInputChanges} value={desc} required name='desc' id='desc' placeholder='Enter Your Description...' />
                </div>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
}

export default AddTodo;
