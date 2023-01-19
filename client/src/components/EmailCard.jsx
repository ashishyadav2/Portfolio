import React, { useState } from "react";
import ViewEmail from "./ViewEmail";
import axios from "axios";
function EmailCard(props) {
    const [style,setStyle] = useState("emailCard");
    const [bool,setBool] = useState(false);
    function deletemail() {
        axios.delete(`http://localhost:5000/deletemail/${props.id}`)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        window.location.reload();
    }
    const messageTemp = props.message.substring(0,50)+"...";
    function close() {
        setStyle("emailCard");
        setBool(false);
    }
    const toEmail = "mailto:"+props.email;
    return (
        <div className={style}>
            <div className="emailerName">
                <p>Name</p>
                <div className="d0">
                    <div className="d1">
                        {props.name}
                    </div>
                    <div className="d2">
                        from: {props.email}
                    </div>
                </div>
            </div>
            <div className="emailContent">
                <p>Message</p>
                {bool?props.message:messageTemp}
                <button className="btn linkA" onClick={()=>{
                    setStyle("emailCardNew");
                    setBool(true);
                }}>Expand</button>
            </div>
            <ViewEmail close={close} toEmail={toEmail} deletemail={deletemail}/>
        </div>
    );
}
export default EmailCard;