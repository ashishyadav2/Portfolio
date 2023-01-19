import React from "react";
function FooterLink(props) {
    return (
        <a className={props.clName} href={props.to}>{props.text}</a>
    );
}
export default FooterLink;