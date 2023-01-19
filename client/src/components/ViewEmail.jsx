import React from 'react';
import "./css/admin.css";
import axios from 'axios';
function ViewEmail(props) {
    
    return (
            <div className='options' style={props.style}>
            <a href={props.toEmail} className="btn">Reply</a>
                <button className="btn delBtn" onClick={()=>{
                    props.deletemail()
                }}>Delete</button>
                <a href="javascript:void(0);" className="btn" onClick={()=> props.close()}>Close</a>
            </div>
    );
}
export default ViewEmail;