import React from "react"
import "../styles/iconlink.sass"

const IconLink = (props) =>(
    <a className="iconlink" href={props.link}>
        <img src={props.icon} className="icon"/>
    </a>
)

export default IconLink