import React from "react";
function Link(props) {
    return (
        <a href={props.src} className={props.clName}>{props.text}</a>
    );
}
export default Link;