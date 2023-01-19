import React, { useState } from "react";
import './css/navigation.css';
import { NavLink } from "react-router-dom";
import {RxHamburgerMenu,RxCross1} from 'react-icons/rx';
function NavigationBar() {
    const [className,setClassName] = useState("ul");
    const [icon,setIcon] = useState(<RxHamburgerMenu/>);
    function showNavBar() {
        if(className ==="ul mobile") {
            setClassName("ul");
            setIcon(<RxHamburgerMenu/>)
        }
        else {
            setClassName("ul mobile");
            setIcon(<RxCross1/>);
        }
    }
    return(
        <header>
            <div id="logo">
                <p>Portfolio</p>
            </div>
            <nav>
                <ul className={className}>
                    <li><NavLink className="link" onClick={showNavBar} to="/">Home</NavLink></li>
                    <li><NavLink className="link" onClick={showNavBar} to="/work">Work</NavLink></li>
                    <li><NavLink className="link" onClick={showNavBar} to="/contact">Contact</NavLink></li>
                    <li><NavLink className="link" onClick={showNavBar} to="/about">About</NavLink></li>
                </ul>
                <button className="menuIcon" onClick={showNavBar}>{icon}</button>
            </nav>
        </header>
    );
}
export default NavigationBar;