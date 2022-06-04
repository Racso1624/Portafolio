import React from "react";
import GitHub from "../images/github.png"
import Instagram from "../images/instagram.png"
import "../styles/topbar.sass";

const TopBar = () =>(
    <div className="topbar">
        <div className="links">
            <a className="link" href="#skills">SKILLS</a>
            <a className="link" href="#projects">PROJECTS</a>
            <a className="link" href="#contact">CONTACT ME</a>
        </div>
        <div className="icons">
            <img src={GitHub} className="icon"/>
            <img src={Instagram} className="icon"/>
        </div>
    </div>
)

export default TopBar