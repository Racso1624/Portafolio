import React from "react";
import ProjectCard from "./ProjectCard";
import AlChilazo from "../images/projects/alchilazo.png"
import Java from "../images/projects/modernjava.png"
import Youtube from "../images/projects/youtube.png"
import Streaming from "../images/projects/streaming.png"
import Calculator from "../images/projects/calculator.png"
import Steam from "../images/projects/steam.png"
import "../styles/projects.sass";

const projects_list = [[AlChilazo, "Al Chilazo", "https://github.com/Racso1624/AlChilazo", "Project Made with Flutter and MongoDB"], 
[Java, "Modern Java", "https://www.figma.com/file/aNbOwYCGHxUtsMFJzjh85J/Modern-Java?node-id=2%3A12", "Project Made in Figma"],
[Youtube, "Youtube Clon", "https://github.com/Racso1624/Proyecto1_Web", "Project Made with Javascript and Sass"],
[Streaming, "Streaming Service Simulator", "https://github.com/Yong-Park/proyecto2BD", "Project Made with Flask, Jinja, Bootstrap and PostgreSQL"],
[Calculator, "Calculator", "https://github.com/Racso1624/Laboratorio8_Calculadora", "Project Made with Javascript for testing"], 
[Steam, "Steam For Moms", "https://www.figma.com/file/LlnsWZ7OabzD1UL1qfVp4h/Steam_Mom?node-id=0%3A1", "Project Made in Figma"]] 

const Projects = () =>(
    <div className="projects" id="projects">
        <div className="projects-content">
            <h1>My Projects</h1>
            <div className="projects-list">
            {
                projects_list.map((element) =>{
                    return <ProjectCard logo={element[0]} name={element[1]} link={element[2]} description={element[3]}/>
                })
            }
        </div>
        </div>
    </div>
)

export default Projects