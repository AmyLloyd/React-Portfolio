import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Form() {
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
      });


    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

    // const handleInputChange = (e) => {
    //     e.preventDefault();
       
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;


        
           
    //     if(inputType === 'email') {
    //         if(!validateEmail(inputValue)) {

    //             setErrorMessage('Enter a valid email using @');
                
    //         } else if (!email || !message || !name) {
    //             setErrorMessage('All fields must be complete');
                
    //         } else {            
    //         setEmail(inputValue)};
    //     } else if (inputType === 'name') {
    //         if (!email || !message || !name) {
    //         setErrorMessage('All fields must be complete');
    //         } 
    //         else {
    //         setName(inputValue)};
    //     } else{
    //         if (!email || !message || !name) {
    //         setErrorMessage('All fields must be complete');
    //         } 
    //         else {
    //         setMessage(inputValue)};
    //     };
    // };

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
            <p>Fill in the form below to get in touch</p>
            <form className="form" onSubmit={handleFormSubmit}>
                <div >

                    <input
                  
                        name="name"
                        onBlur={handleChange}
                        type="input"
                        placeholder="Name"
                        className="field"
                    />
                </div>
                <div >

                    <input
            
                        name="email"
                        onBlur={handleChange}
                        type="email"
                        placeholder="Email"
                        className="field"
                    />
                </div>
                <div>

                    <textarea
             
                        name="message"
                        onBlur={handleChange}
                        type="text"
                        placeholder="Message"
                        className="field"
                    />
                </div>
                <button type="submit" className="btn feature-button m-1 px-3">Submit</button>
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

