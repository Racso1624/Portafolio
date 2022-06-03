import React from "react";
import TopBar from "./TopBar"
import Home from "./Home"
import "../styles/app.sass";

const App = () =>(

    <div className="app">
        <TopBar/>
        <Home/>
    </div>
)

export default App