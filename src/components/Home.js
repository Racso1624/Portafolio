import React from "react"
import ProfilePicture from "../images/profile.png"
import "../styles/home.sass"

const Home = () =>(
    <div className="home" id="home">
        <div className="home-content">
            <div className="profilepicture">
                <img src={ProfilePicture} className="profile"/>
            </div>
            <div className="text">
                <h1>Hi My Name Is Oscar!</h1>
                <p>
                    I am a Frontend and Backend Developer<br></br>
                    I like to create functional apps and websites<br></br>
                    I am a Third Year Computer Science Student At Universidad Del Valle De Guatemala
                </p>
            </div>
        </div>
    </div>
)

export default Home