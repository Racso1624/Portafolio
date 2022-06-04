import React from "react";
import GitHub from "../images/github.png"
import "../styles/topbar.sass";

const TopBar = () =>(
    <div className="topbar">
        <div className="links">
            <a className="link" href="Home">HOME</a>
            <a className="link" href="Skills">SKILLS</a>
            <a className="link" href="Projects">PROJECTS</a>
            <a className="link" href="Contact">CONTACT ME</a>
        </div>
        <div className="icons">
            <img src={GitHub} className="github"/>
        </div>
    </div>
)

export default TopBar