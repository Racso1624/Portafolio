import React from "react"
import IconLink from "./IconLink"
import GitHub from "../images/icons/github.png"
import LinkedIn from "../images/icons/linkedin.png"
import Instagram from "../images/icons/instagram.png"
import Mail from "../images/icons/mail.png"
import "../styles/contact.sass"

const icons_list = [[GitHub, "https://github.com/Racso1624"], 
[LinkedIn, "https://www.linkedin.com/in/oscar-fernando-l%C3%B3pez-barrios-93a1a81a1/"],
[Mail,"mailto:lop20679@uvg.edu.gt"], 
[Instagram, "https://www.instagram.com/fer10_lb/"]]

const Contact = () =>(
    <div className="contact" id="contact">
        <div className="contact-content">
            <div className="contact-text">
                <h1>Contact Me!</h1>
                <p>Leave Me a Message</p>
            </div>
            <div className="icons-list">
                {
                    icons_list.map((element, index) =>{
                        return <IconLink key={index} icon={element[0]} link={element[1]}/>
                    })
                }
            </div>
        </div>
    </div>
)

export default Contact