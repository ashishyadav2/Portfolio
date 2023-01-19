import React from "react";
import Link from "./Link";
import "./css/banner.css";
function Banner() {
    return (
        <section>
            <div className="heroImage">
                <p className="heroText">A personal portfolio website is a platform for showcasing your skills, experiences, and achievements to the world. It is a way to present your work and personality to potential employers, clients, and collaborators. A personal portfolio website can be a powerful tool in your job search or career development, as it allows you to demonstrate your skills and accomplishments in a visual and interactive way.</p>
                <Link src="/about" text="Know More" clName="btn"/>
            </div>
        </section>
    );
}
export default Banner;