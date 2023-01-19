import React from "react";
import avatar from "./images/avatar.jpg";
import "./css/about.css";
function About() {
    return(
        <div className="aboutDiv">
            <div className="aboutImg">
                <img src={avatar} alt="avatar"></img>
            </div>
            <div className="aboutText">
                <p className="heading">About me</p>
                <div className="aboutDetails">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum enim ligula, ac viverra ante aliquet eu. In hendrerit gravida dui sit amet volutpat. Fusce feugiat luctus ligula, ut commodo mi vehicula nec. Etiam at magna in eros viverra porttitor. Praesent sed feugiat metus, quis porta leo. Fusce a libero laoreet, gravida mauris a, condimentum enim. In vel augue sit amet felis ullamcorper iaculis ut non dolor. Nam et pulvinar ipsum, vitae euismod tellus. Phasellus ut nulla eu nisl gravida lacinia malesuada id quam. Proin tempor consectetur nisi, at interdum diam tempus scelerisque. Ut vulputate, libero id commodo luctus, orci urna tincidunt lacus, nec sodales neque augue sollicitudin ligula. Nam dictum risus sit amet mauris dapibus, at convallis tortor vestibulum. Praesent tempor aliquet purus, sit amet viverra purus tristique eget. Fusce porta scelerisque luctus.
                    <br/><br/><br/>
                    Donec et vehicula neque, non elementum dui. Fusce pharetra mattis tortor ac euismod. Cras fringilla massa ac aliquet venenatis. Nam elit diam, elementum a maximus ac, pellentesque vitae mi. Proin pellentesque laoreet efficitur. In hac habitasse platea dictumst. Curabitur in erat tincidunt, viverra enim nec, bibendum mi. Mauris sit amet tortor id enim faucibus interdum ut nec eros. Integer accumsan rutrum auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean maximus sem non diam elementum, eget vestibulum nunc blandit. Suspendisse in ante tincidunt, blandit velit sed, dictum massa.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;