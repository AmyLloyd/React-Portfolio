import { useState } from 'react';
import './style.css';

import { validateEmail } from '../../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else{
            setMessage(inputValue);
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name || !message) {
            setErrorMessage("All fields must be complete");
            return;
        }
        alert(`Hello ${name}`);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mb-3">
            <h1>Contact Form</h1>
            <h2>Fill in the form below to get in touch</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-floating">
                    <label className="form-label me-3" for="floatingInput">Name:</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="input"
                        placeholder="name"
                        id="floatingInput"
                    />
                </div>
                <div className="form-floating">
                   <label for="floatingInput" className="form-label">Email:</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                        id="floatingInput"
                    />
                </div>
                <div className="form-floating">
                    <label for="floatingTextarea" className="form-label">Message:</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="message"
                        id="floatingTextArea"
                    />
                </div>
                <button type="submit" className="btn btn-success m-1 px-3">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        );
    }

    export default Form;

