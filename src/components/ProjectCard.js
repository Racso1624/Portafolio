import React from "react"
import "../styles/projectcard.sass"

const ProjectCard = (props) =>(
    <a className="projectcard" href={props.link}>
        <div className="projectcard-content">
            <img src={props.logo} className="projectimage"/>
            <div className="cardname">{props.name}</div>
        </div>
        <p className="description"> 
            {props.description}
        </p>
    </a>
)

export default ProjectCard