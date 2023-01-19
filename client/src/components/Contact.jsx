import React from 'react';
import Form from "./Form";
function Contact() {
    return(
        <div className='contactDiv'>
            <Form to="/" method="post" title="Contact Me"/>
        </div>
    );
}
export default Contact;