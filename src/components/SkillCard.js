import React from "react"

const SkillCard = (props) =>(
    <div className="skillcard">
        <img src={props.logo} className="cardimage"/>
        <div className="cardname">{props.name}</div>
    </div>
)

export default SkillCard