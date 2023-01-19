import React from "react";
function CardLite (props) {
    return (
        <div className="card" onClick={()=>{
            props.getPostData(props.id)
        }}>
            <img src={`data:/image/png;base64,${props.img}`} alt="work"></img>           
            <p className="workTitle">{props.workTitle}</p>
        </div>
    );
}
export default CardLite;
