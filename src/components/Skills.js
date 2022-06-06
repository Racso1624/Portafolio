import React from "react"
import SkillCard from "./SkillCard"
import Python from "../images/skills/python.png"
import Kotlin from "../images/skills/kotlin.png"
import Flutter from "../images/skills/flutter.png"
import Javascript from "../images/skills/javascript.png"
import React_Logo from "../images/skills/react.png"
import Figma from "../images/skills/figma.png"
import Lightroom from "../images/skills/lightroom.png"
import Java from "../images/skills/java.png"
import Postgres from "../images/skills/postgres.png"
import "../styles/skills.sass"

const skills_list = [[Python, "Python"], [Kotlin, "Kotlin"], [Flutter, "Flutter"], 
[Javascript, "Javascript"], [React_Logo, "React"], [Figma, "Figma"], 
[Lightroom, "Lightroom"], [Java, "Java"], [Postgres, "PostgreSQL"]]

const Skills = () =>(
    <div className="skills" id="skills">
        <div className="skills-content">
            <h1>My Skills</h1>
            <div className="skill-list">
                {
                    skills_list.map((element, index) =>{
                        return <SkillCard key={index} logo={element[0]} name={element[1]}/>
                    })
                }
            </div>
        </div>
    </div>
)

export default Skills