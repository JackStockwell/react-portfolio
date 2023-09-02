// Imports
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import "../../styles/styles.css"
import "./email.css"

// Validate email helper
import { validateEmail } from "../utils/Animation/helpers";

export default function Email() {

    // Initialise form data.
    let formData = {
        email: '',
        form_name: '',
        message: '',
        errorMessage: ''
    }

    // Set state for formData.
    const [data, setData] = useState(formData)

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        let { name, value } = e.target;
        // Set the data to the input on the target. 
        setData({ ...data, [name]: value })    
    };

    // Deconstruct data.
    let { email, form_name, message, errorMessage } = data

    // Form ref
    const form = useRef();

    // Sends the email using emailjs.
    const handleSendEmail = (e) => {
        e.preventDefault();

        // Data validation. Validates the email using the helpers.
        if (!validateEmail(email)) {
            setData({ ...data, errorMessage: "You must enter a valid email!"})
            return;
        }

        // Ensures the form name is at least 2 characters and a message is entered.
        if ( form_name < 2 || !message) {
            setData({ ...data, errorMessage: "You must enter a name and message!"})
            return;
        }
        
        // Uses emailjs to send an email more securely, parses Public key, template key and user key.
        emailjs.sendForm('service_zbq1s4n', 'template_5r44ao7', form.current, 'r1PM_f0hfPpyDAu_O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <section className='email'>
            <form className="form" ref={form} onSubmit={handleSendEmail}>
                <div className="col md-6">
                    <label className="label" htmlFor="email" >Email</label>
                    <input
                        className="form-controls"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        placeholder="example@mail.com"
                    />
                </div>
                <div className="col md-6">
                    <label className="label" htmlFor="name" >Name</label>
                    <input
                        className="form-controls"
                        value={form_name}
                        name="form_name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="John Doe"
                    />
                </div>
                <div className="col md-12">
                    <label className="label" htmlFor="message">Leave your message.</label>
                    <textarea
                        className="form-text"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        placeholder="What do you want to ask?"
                    >
                    </textarea>
                </div>
                {/* If there is an error message it is automaticall displayed. */}
                <span className="err">&nbsp;{errorMessage}&nbsp;</span>
                <input className="btn underline-a" type="submit" value="Send" />
            </form>
        </section>
    )
}