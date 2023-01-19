import React, { useState } from "react";
import axios from "axios";
import FormElement from "./FormElement";
import "./css/contact.css";
function Form(props) {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("Send message");
    function handleChange(event) {
        const {name,value} =  event.target;
        setFormData(prevValue=>{
            return {
                ...prevValue,
                [name] : value
            };
        });
    }
    function submitMessage(event) {
        axios.post("http://localhost:5000/email",formData)
        .then(res=>{
            if(res.status === 200) {
                setErrorMessage("Message sent successfully");                
            }
            else {
                setErrorMessage("Couldn't send message");                
            }
            setInterval(()=>{
                setErrorMessage("Send message");
            },2500);
            console.log(res.status);
        })
        .catch(err=>{
            console.log(err);
        });
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        event.preventDefault();
    }
    
    return(
        <>
            <form action={props.to} onSubmit={submitMessage} method={props.method} className="contactForm">
            <div className="divHeading">{props.title}</div>
                <FormElement title="Full name" handleChange={handleChange} placeholder="Full name" name="name" value={formData.name} type="text"/>
                <FormElement title="E-mail address" handleChange={handleChange} placeholder="E-mail address" name="email" value={formData.email} type="email"/>
                <div className="formElement">
                    <p>Your message</p>
                    <textarea onChange={handleChange} name="message" placeholder="Write your message at maximum 500 characters..." rows="12" columns="30" maxLength="500" value={formData.message} required></textarea>
                </div>
                <input type="submit" value={errorMessage} className="submitBtn"></input>
            </form>
        </>
    );  
}
export default Form;