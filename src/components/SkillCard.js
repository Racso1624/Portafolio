import React from "react"
import "../styles/skillcard.sass"

const SkillCard = (props) =>(
    <div className="skillcard">
        <img src={props.logo} className="cardimage"/>
        <div className="cardname">{props.name}</div>
    </div>
)

export default SkillCard