import React from "react";
import Link from "./Link";
function Card(props) {
    const arr = ["overlay left","overlay right","overlay top","overlay bottom"]
    let className = arr[Math.floor(Math.random()*4)];
    let trimmedWorkContent = props.workContent.substring(0,200)+ "...";
    return (
        <div className="card">
            <img src={`data:/image/png;base64,${props.img}`} alt="work"></img>           
            <p className="workTitle">{props.workTitle}</p>
            <div className={className}>
            <p className="workContent">{trimmedWorkContent}</p>
            <div className="bottomDiv">
                <p className="date">{props.date}</p>
                <Link clName="btn" text="Read more" src={props.src}/>
            </div>
            </div>
        </div>
    );
}
export default Card;
