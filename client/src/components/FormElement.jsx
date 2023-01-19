import React from "react";
import "./css/contact.css";
function FormElement(props) {
    return (
        <div className="formElement">
            <p>{props.title}</p>
            <input type={props.type} onChange={props.handleChange} placeholder={props.placeholder} name={props.name} value={props.value} required></input>
        </div>
    );
}
export default FormElement;