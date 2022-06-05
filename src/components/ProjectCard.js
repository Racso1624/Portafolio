import React from "react"
import "../styles/projectcard.sass"

const ProjectCard = (props) =>(
    <a className="projectcard" href={props.link}>
        <img src={props.logo} className="cardimage"/>
        <div className="cardname">{props.name}</div>
    </a>
)

export default ProjectCard