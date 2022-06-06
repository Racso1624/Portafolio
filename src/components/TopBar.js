import React from "react"
import "../styles/topbar.sass"

const TopBar = () =>(
    <div className="topbar">
        <div className="links">
            <a className="link" href="#home">HOME</a>
            <a className="link" href="#skills">SKILLS</a>
            <a className="link" href="#projects">PROJECTS</a>
            <a className="link" href="#contact">CONTACT ME</a>
        </div>
        <div className="name">
            <h1>Oscar López</h1>
        </div>
    </div>
)

export default TopBar