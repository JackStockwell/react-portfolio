import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import "../../styles/styles.css"
import "./email.css"

export default function Email() {

    // Initialise form data.
    let formData = {
        email: ' ',
        from_name: ' ',
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
    let { email, form_name, message } = data

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!email) {
            
        }
  
        emailjs.sendForm('service_zbq1s4n', 'template_5r44ao7', form.current, 'r1PM_f0hfPpyDAu_O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <section children='email'>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="example@mail.com"
                    required
                />
                <input
                    value={form_name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="John Doe"
                    required
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="What do you want to ask?"
                    required
                >
                </textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    )
}