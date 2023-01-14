import { useState } from "react";
import AboutMe from "../sections/AboutMe";
import MainContent from "../sections/MainContent";
import Technologies from "../sections/Technologies";
import "./App.css";

function App() {
    return (
        <div className="App">
            <section className="first-section__container">
                <AboutMe />
                <MainContent />
                <Technologies />
            </section>
        </div>
    );
}

export default App;
