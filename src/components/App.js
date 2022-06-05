import React from "react"
import TopBar from "./TopBar"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import "../styles/app.sass"

const App = () =>(

    <div className="content">
        <TopBar/>
        <div className="app">
            <Home/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    </div>
)

export default App