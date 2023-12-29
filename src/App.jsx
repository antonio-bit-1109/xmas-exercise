import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";
import MainSection from "./components/MainSection";
import { useState } from "react";

function App() {
    const [BeforeInit, SetBeforeInit] = useState(true);

    const changeBeforeInit = (value) => {
        SetBeforeInit(value);
    };

    return (
        <div className="App">
            <NavBar />
            <Jumbo changeBeforeInit={changeBeforeInit} BeforeInit={BeforeInit} />
            <MainSection BeforeInit={BeforeInit} />
        </div>
    );
}

export default App;
