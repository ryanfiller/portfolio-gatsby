import React from 'react'


const Form = () => (
    <form name="contact" netlify>
        <div>
            <label>Your Name: <input type="text" name="name" /></label>   
        </div>
        <div>
            <label>Your Email: <input type="email" name="email" /></label>
        </div>
        <div>
            <label>Message: <textarea name="message"></textarea></label>
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
    </form>
)

export default Form;