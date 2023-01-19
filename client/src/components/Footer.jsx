import React from "react";
import "./css/footer.css";
import FooterLink from "./FooterLink";
function Footer() {
    const date = new Date().getFullYear();
    return(
        <footer>
            <span className="logoText">Portfolio - Ashish Yadav</span>
            <div className="footerLinks">
                <div className="linksDiv">
                    <span className="linkDivHeading">Site links</span>
                    <ul>
                        <li><FooterLink clName="links" to="/work" text="Work" /></li>
                        <li><FooterLink clName="links" to="/about" text="About" /></li>
                        <li><FooterLink clName="links" to="/contact" text="Contact" /></li>
                    </ul>
                </div>
                <div className="linksDiv">
                    <span className="linkDivHeading">Social links</span>
                    <ul>
                        <li><FooterLink clName="links" to="https://github.com/unixm9/" text="Github" /></li>
                        <li><FooterLink clName="links" to="https://facebook.com/" text="Facebook" /></li>
                        <li><FooterLink clName="links" to="https://twitter.com" text="Twitter" /></li>
                        <li><FooterLink clName="links" to="https://instagram" text="Instagram" /></li>
                    </ul>
                </div>
            </div>
            <div className="copyrightText">
                <p>Copyright {date} © Ashish Yadav. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;