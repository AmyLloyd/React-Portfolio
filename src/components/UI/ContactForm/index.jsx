import { useState } from 'react';
import './style.css';

import { validateEmail } from '../../../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        let inputType = target.name;
        let inputValue = target.value;

        if(inputType = 'email') {
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
        <div className="container text-center mb-3">
            <h1>Hello {name}</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="name"
                    placeholder="name"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="message"
                />
                <button type="submit"></button>
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

