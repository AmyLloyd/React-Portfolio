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
            <h2>Contact Form</h2>
            <h5>Fill in the form below to get in touch</h5>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="">

                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="input"
                        placeholder="Name"
                        className="field"
                    />
                </div>
                <div className="">

                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                        className="field"
                    />
                </div>
                <div className="">

                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                        className="field"
                    />
                </div>
                <button type="submit" className="btn button m-1 px-3">Submit</button>
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

