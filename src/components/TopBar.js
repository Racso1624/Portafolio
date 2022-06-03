import React from "react";
import GitHub from "../images/github.png"
import "../styles/topbar.sass";

const TopBar = () =>(
    <div className="topbar">
        <div className="links">
            <button className="button">HOME</button>
            <button className="button">SKILLS</button>
            <button className="button">PROJECTS</button>
            <button className="button">CONTACT ME</button>
        </div>
        <div className="icons">
            <img src={GitHub} className="github"/>
        </div>
    </div>
)

export default TopBar