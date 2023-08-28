import React, { useState } from "react";
import "../../styles/styles.css"
import "./email.css"

export default function Email({}) {

    let formData = {
        email: 'example@mail.com',
        name: 'Username',
        text: 'Password123!',
        errorMessage: ''
    }

    const [data, setData] = useState(formData)

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        let { name, value } = e.target;
    
        setData({ ...data, [name]: value })
    
        console.log([name], value)
        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
    };

    let { email, name, text } = formData;

    return (
        <section children='email'>
            <form className="form">
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={name}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
                />
                <textarea>
                    
                </textarea>
                <button type="button">
                Submit
                </button>
            </form>
        </section>
    )
}